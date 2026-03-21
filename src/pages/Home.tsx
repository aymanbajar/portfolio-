import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/context/Theme/ThemeContext";
import { useLanguage } from "../hooks/context/Language/LanguageContext";
import { useState, useEffect } from "react";
import NetworkAnimation from "../Components/NetworkAnimation";

export default function Home() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { language } = useLanguage();

  const titles = [
    "Web Developer",
    "Full Stack Developer",
    "Mern Stack Developer",
    "Computer Engineer",
  ];

  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = t(titles[currentTitle]);
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle, t]);

  const isLight = theme === "light";
  const isRtl = language === "ar";

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className={`
        relative min-h-screen flex items-center justify-center
        overflow-hidden pt-24 pb-16 px-5 sm:px-8 md:px-12 lg:px-20
        ${isRtl ? "font-Cairo" : "font-Cairo-Eng"}
        ${isLight ? "bg-slate-50 text-gray-900" : "bg-[#080c14] text-gray-100"}
      `}
    >
      {/* ── Background layers ── */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.12) 0%, transparent 70%)"
            : "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 -z-10"
        style={{
          background: isLight
            ? "linear-gradient(to top, rgba(241,245,249,1), transparent)"
            : "linear-gradient(to top, rgba(8,12,20,1), transparent)",
        }}
      />
      <NetworkAnimation />

      {/* ── Two-column layout ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

        {/* ══════════════════════════════════════
            LEFT — Text / Info Glass Card
        ══════════════════════════════════════ */}
        <div
          className="relative rounded-3xl p-8 sm:p-10 flex flex-col gap-7 order-2 lg:order-1"
          style={{
            background: isLight
              ? "rgba(255,255,255,0.55)"
              : "rgba(255,255,255,0.04)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: isLight
              ? "1px solid rgba(255,255,255,0.85)"
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: isLight
              ? "0 24px 64px rgba(15,23,42,0.1), inset 0 1px 0 rgba(255,255,255,0.9)"
              : "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-8 right-8 h-px rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.6), rgba(192,132,252,0.6), transparent)",
            }}
          />

          {/* Eyebrow badge */}
          <div className="flex items-center gap-2 w-fit">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase backdrop-blur-md"
              style={{
                background: isLight
                  ? "rgba(14,165,233,0.08)"
                  : "rgba(56,189,248,0.07)",
                border: isLight
                  ? "1px solid rgba(14,165,233,0.25)"
                  : "1px solid rgba(56,189,248,0.15)",
                color: isLight ? "#0284c7" : "#38bdf8",
                boxShadow: "0 0 18px rgba(56,189,248,0.1)",
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span
                  className="absolute inline-flex h-full w-full rounded-full animate-ping opacity-70"
                  style={{ background: "#38bdf8" }}
                />
                <span
                  className="relative inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: "#38bdf8" }}
                />
              </span>
              {t("Available for work")}
            </div>
          </div>

          {/* Name */}
          <div>
            <p
              className="text-xs uppercase tracking-[0.3em] font-medium mb-2"
              style={{ color: isLight ? "#94a3b8" : "#475569" }}
            >
              {t("Hello, I'm")}
            </p>
            <h1
              className="font-black leading-none tracking-tight text-4xl sm:text-5xl md:text-6xl"
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 28px rgba(129,140,248,0.2))",
              }}
            >
              {t("Ayman Bajar")}
            </h1>
          </div>

          {/* Typewriter */}
          <div className="flex items-center min-h-[40px]">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold flex items-center gap-1 flex-wrap">
              <span style={{ color: isLight ? "#64748b" : "#64748b" }}>
                {t("I'm a")}&nbsp;
              </span>
              <span
                className="font-bold"
                style={{
                  background: "linear-gradient(to right, #38bdf8, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {displayText}
              </span>
              <span
                className="animate-pulse font-thin"
                style={{ color: "#818cf8", WebkitTextFillColor: "#818cf8" }}
              >
                |
              </span>
            </h2>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div
              className="flex-1 h-px rounded-full"
              style={{ background: "linear-gradient(to right, transparent, #38bdf8)" }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg, #38bdf8, #c084fc)" }}
            />
            <div
              className="flex-1 h-px rounded-full"
              style={{ background: "linear-gradient(to left, transparent, #c084fc)" }}
            />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col xs:flex-row items-center gap-3 w-full">
            {/* Primary — Download CV */}
            <a
              href="../../public/cv.pdf"
              download
              className="relative overflow-hidden group px-6 py-3 rounded-2xl text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:scale-105 active:scale-95 w-full xs:w-auto text-center"
              style={{
                background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
                boxShadow: "0 0 24px rgba(129,140,248,0.35)",
              }}
            >
              <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
              <span className="relative z-10">{t("Download My Cv")}</span>
            </a>

            {/* Secondary — Contact */}
            <button
              className={`
                relative overflow-hidden group
                px-6 py-3 rounded-2xl
                text-sm font-semibold tracking-wide
                border backdrop-blur-md
                transition-all duration-300
                hover:scale-105 active:scale-95
                w-full xs:w-auto
                ${isLight
                  ? "border-sky-200/60 text-sky-600 bg-sky-50/40 hover:bg-sky-100/60"
                  : "border-white/10 text-sky-300 bg-white/5 hover:bg-white/10"
                }
              `}
              onClick={() => {
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: "linear-gradient(135deg, rgba(56,189,248,0.08), rgba(192,132,252,0.08))" }}
              />
              <span className="relative z-10">{t("Contact Me")}</span>
            </button>
          </div>

          {/* Bottom accent line */}
          <div
            className="absolute bottom-0 left-8 right-8 h-px rounded-full"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.4), rgba(56,189,248,0.4), transparent)",
            }}
          />
        </div>

        {/* ══════════════════════════════════════
            RIGHT — Photo Glass Card
        ══════════════════════════════════════ */}
        <div
          className="relative rounded-3xl overflow-hidden order-1 lg:order-2 flex items-center justify-center"
          style={{
            minHeight: "420px",
            background: isLight
              ? "rgba(255,255,255,0.45)"
              : "rgba(255,255,255,0.03)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            border: isLight
              ? "1px solid rgba(255,255,255,0.8)"
              : "1px solid rgba(255,255,255,0.07)",
            boxShadow: isLight
              ? "0 24px 64px rgba(15,23,42,0.1), inset 0 1px 0 rgba(255,255,255,0.9)"
              : "0 24px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
          }}
        >
          {/* Decorative corner glows */}
          <div
            className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
              transform: "translate(30%, -30%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)",
              transform: "translate(-30%, 30%)",
            }}
          />

          {/* Top accent */}
          <div
            className="absolute top-0 left-8 right-8 h-px rounded-full z-10"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5), rgba(192,132,252,0.5), transparent)",
            }}
          />

          {/* Photo frame */}
          <div className="relative p-6 flex flex-col items-center gap-4 w-full">
            {/* Circular image */}
            <div
              className="rounded-full overflow-hidden"
              style={{
                width: "clamp(200px, 28vw, 290px)",
                height: "clamp(200px, 28vw, 290px)",
                boxShadow: isLight
                  ? "0 0 0 4px rgba(255,255,255,0.9), 0 0 40px rgba(129,140,248,0.25)"
                  : "0 0 0 4px rgba(255,255,255,0.07), 0 0 40px rgba(129,140,248,0.2)",
              }}
            >
              <img
                 src="/myPhoto.jpg"
                alt="Ayman Bajar"
                className="w-full h-full object-cover object-top"
                style={{ display: "block" }}
              />
            </div>

            {/* Name tag below photo */}
            <div
              className="px-5 py-2.5 rounded-2xl flex flex-col items-center gap-0.5"
              style={{
                background: isLight
                  ? "rgba(255,255,255,0.7)"
                  : "rgba(255,255,255,0.05)",
                border: isLight
                  ? "1px solid rgba(255,255,255,0.9)"
                  : "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
              }}
            >
              <span
                className="text-sm font-bold tracking-wide"
                style={{
                  background: "linear-gradient(to right, #38bdf8, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {t("Ayman Bajar")}
              </span>
              <span
                className="text-[11px] tracking-widest uppercase font-medium"
                style={{ color: isLight ? "#94a3b8" : "#475569" }}
              >
                {t("Full Stack Developer")}
              </span>
            </div>
          </div>

          {/* Bottom accent */}
          <div
            className="absolute bottom-0 left-8 right-8 h-px rounded-full z-10"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(192,132,252,0.4), rgba(56,189,248,0.4), transparent)",
            }}
          />
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 z-10">
        <span className={`text-xs tracking-widest uppercase ${isLight ? "text-gray-500" : "text-gray-500"}`}>
          {t("Scroll")}
        </span>
        <div
          className={`w-5 h-8 rounded-full border flex items-start justify-center pt-1.5 ${
            isLight ? "border-gray-400" : "border-gray-600"
          }`}
        >
          <div
            className="w-1 h-2 rounded-full animate-bounce"
            style={{ background: "#818cf8" }}
          />
        </div>
      </div>
    </section>
  );
}