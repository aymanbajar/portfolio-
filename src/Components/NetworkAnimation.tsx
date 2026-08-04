import { useEffect, useRef } from "react";
import { useTheme } from "../hooks/context/Theme/ThemeContext";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function NetworkAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = canvas?.parentElement;
    const context = canvas?.getContext("2d");
    if (!canvas || !container || !context) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];

    const setCanvasSize = () => {
      const nextWidth = Math.max(container.clientWidth, 1);
      const nextHeight = Math.max(Math.min(container.clientHeight, 1600), 1);
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      width = nextWidth;
      height = nextHeight;
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = "100%";
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

      const particleCount = Math.max(14, Math.min(38, Math.floor(width / 34)));
      particles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        radius: Math.random() * 0.7 + 0.65,
      }));
    };

    const stopAnimation = () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };

    const drawFrame = () => {
      context.clearRect(0, 0, width, height);

      const pointColor =
        theme === "dark"
          ? "rgba(129, 140, 248, 0.34)"
          : "rgba(79, 70, 229, 0.24)";
      const lineColor = theme === "dark" ? "129, 140, 248" : "79, 70, 229";

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = pointColor;
        context.fill();
      });

      particles.forEach((firstParticle, index) => {
        particles.slice(index + 1).forEach((secondParticle) => {
          const deltaX = firstParticle.x - secondParticle.x;
          const deltaY = firstParticle.y - secondParticle.y;
          const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

          if (distance >= 135) return;

          const opacity = (1 - distance / 135) * 0.11;
          context.beginPath();
          context.moveTo(firstParticle.x, firstParticle.y);
          context.lineTo(secondParticle.x, secondParticle.y);
          context.strokeStyle = `rgba(${lineColor}, ${opacity})`;
          context.lineWidth = 0.8;
          context.stroke();
        });
      });

      animationFrameRef.current = requestAnimationFrame(drawFrame);
    };

    const startAnimation = () => {
      if (!reducedMotion && animationFrameRef.current === null) {
        animationFrameRef.current = requestAnimationFrame(drawFrame);
      }
    };

    setCanvasSize();

    if (reducedMotion) {
      context.clearRect(0, 0, width, height);
      return;
    }

    const resizeObserver = new ResizeObserver(setCanvasSize);
    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) startAnimation();
        else stopAnimation();
      },
      { rootMargin: "120px 0px" }
    );

    resizeObserver.observe(container);
    visibilityObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      stopAnimation();
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
}
