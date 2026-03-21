import { useTranslation } from "react-i18next";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import NetworkAnimation from "../Components/NetworkAnimation";
import { useLanguage } from "../hooks/context/Language/LanguageContext";
import { useTheme } from "../hooks/context/Theme/ThemeContext";
import { useState } from "react";

// ─── Socials ─────────────────────────────────────
const SOCIALS = [
  { href: "https://github.com/aymanbajar", icon: FaGithub, label: "GitHub" },
  { href: "https://www.linkedin.com/in/eymenbacar/", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/bajarayman/", icon: FaInstagram, label: "Instagram" },
  { href: "https://x.com/AymanBajar", icon: FaXTwitter, label: "X" },
  { href: "https://www.facebook.com/ayman.bajar.93", icon: FaFacebook, label: "Facebook" },
];

// ─── Social Button ───────────────────────────────
function SocialButton({
  icon: Icon,
  href,
  label,
  isLight,
}: {
  icon: IconType;
  href: string;
  label: string;
  isLight: boolean;
}) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col items-center gap-2 group"
      style={{ textDecoration: "none" }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300"
        style={{
          background: hover
            ? "linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)"
            : isLight
              ? "rgba(15,23,42,0.06)"
              : "rgba(255,255,255,0.07)",
          transform: hover ? "translateY(-5px)" : "translateY(0)",
          boxShadow: hover
            ? "0 16px 32px rgba(59,130,246,0.3), 0 0 0 1px rgba(139,92,246,0.2)"
            : isLight
              ? "0 2px 8px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.06)"
              : "0 2px 8px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        <Icon
          size={18}
          style={{
            color: hover ? "#fff" : isLight ? "#475569" : "#94a3b8",
            transition: "color 0.3s",
          }}
        />
      </div>
      <span
        className="text-[10px] tracking-widest uppercase font-medium transition-all duration-300"
        style={{
          color: hover
            ? isLight ? "#3b82f6" : "#7dd3fc"
            : isLight ? "#94a3b8" : "#475569",
          opacity: hover ? 1 : 0.7,
        }}
      >
        {label}
      </span>
    </a>
  );
}

// ─── Contact Component ───────────────────────────
export default function Contact() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { theme } = useTheme();

  const isLight = theme === "light";
  const isRtl = language === "ar";

  return (
    <section
      dir={isRtl ? "rtl" : "ltr"}
      className={`min-h-screen flex items-center justify-center px-6 py-14 relative overflow-hidden ${
        isLight ? "bg-slate-50" : "bg-[#080c14]"
      }`}
    >
      {/* ─── Backgrounds (unchanged) ───────────── */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.12) 0%, transparent 70%)"
            : "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(56,189,248,0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-40 -z-10 pointer-events-none"
        style={{
          background: isLight
            ? "linear-gradient(to top, rgba(241,245,249,1), transparent)"
            : "linear-gradient(to top, rgba(8,12,20,1), transparent)",
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-45">
        <NetworkAnimation />
      </div>

      {/* ─── Card ──────────────────────────────── */}
      <div
        className="w-full max-w-2xl relative z-10"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute -inset-px rounded-3xl pointer-events-none"
          style={{
            background: isLight
              ? "linear-gradient(135deg, rgba(56,189,248,0.3), rgba(139,92,246,0.15), rgba(56,189,248,0.1))"
              : "linear-gradient(135deg, rgba(56,189,248,0.2), rgba(139,92,246,0.1), rgba(56,189,248,0.05))",
            zIndex: -1,
          }}
        />

        <div
          className="rounded-3xl overflow-hidden"
          style={{
            background: isLight
              ? "rgba(255,255,255,0.82)"
              : "rgba(13,18,30,0.85)",
            backdropFilter: "blur(24px)",
            boxShadow: isLight
              ? "0 32px 80px rgba(15,23,42,0.12), 0 0 0 1px rgba(255,255,255,0.9)"
              : "0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)",
          }}
        >
          {/* ─── Top accent bar ──────────────── */}
          <div
            className="h-0.5 w-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #0ea5e9 30%, #8b5cf6 70%, transparent 100%)",
            }}
          />

          <div className="p-10 md:p-14">
            {/* ─── Header ──────────────────────── */}
            <div className="text-center mb-14">
              {/* Small eyebrow label */}
              <div className="flex items-center justify-center gap-3 mb-5">
                <div
                  className="h-px flex-1 max-w-[60px]"
                  style={{ background: isLight ? "rgba(148,163,184,0.5)" : "rgba(100,116,139,0.4)" }}
                />
                <span
                  className="text-[10px] tracking-[0.35em] uppercase font-semibold"
                  style={{ color: isLight ? "#94a3b8" : "#4b5563" }}
                >
                  {t("Contact")}
                </span>
                <div
                  className="h-px flex-1 max-w-[60px]"
                  style={{ background: isLight ? "rgba(148,163,184,0.5)" : "rgba(100,116,139,0.4)" }}
                />
              </div>

              <h1
                className="text-4xl md:text-[3.25rem] font-black leading-none tracking-tight mb-4"
                style={{
                  background: "linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  letterSpacing: "-0.03em",
                }}
              >
                {t("Get In Touch")}
              </h1>

              <p
                className="text-sm md:text-[0.9rem] max-w-sm mx-auto leading-relaxed"
                style={{ color: isLight ? "#64748b" : "#64748b" }}
              >
                {t("Open to freelance work, collaborations, and cool ideas.")}
              </p>
            </div>

            {/* ─── Email Card ──────────────────── */}
            <a
              href="mailto:eymenbacaryos@gmail.com"
              className="block group mb-10"
              style={{ textDecoration: "none" }}
            >
              <div
                className="relative flex items-center gap-5 p-5 rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  background: isLight
                    ? "rgba(248,250,252,0.9)"
                    : "rgba(255,255,255,0.04)",
                  border: isLight
                    ? "1px solid rgba(226,232,240,0.8)"
                    : "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Hover shimmer */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: isLight
                      ? "linear-gradient(135deg, rgba(14,165,233,0.04), rgba(139,92,246,0.04))"
                      : "linear-gradient(135deg, rgba(14,165,233,0.07), rgba(139,92,246,0.07))",
                  }}
                />

                {/* Icon */}
                <div
                  className="relative w-11 h-11 flex items-center justify-center rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg,#0ea5e9,#6366f1)",
                    boxShadow: "0 8px 20px rgba(14,165,233,0.3)",
                  }}
                >
                  <MdOutlineEmail size={19} color="#fff" />
                </div>

                {/* Text */}
                <div className="relative flex flex-col min-w-0">
                  <span
                    className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-0.5"
                    style={{ color: isLight ? "#94a3b8" : "#475569" }}
                  >
                    Email
                  </span>
                  <span
                    className="font-semibold text-[0.92rem] truncate transition-colors duration-300"
                    style={{
                      color: isLight ? "#1e293b" : "#e2e8f0",
                    }}
                  >
                    eymenbacaryos@gmail.com
                  </span>
                </div>

                {/* Arrow */}
                <div
                  className="relative ml-auto shrink-0 w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 group-hover:translate-x-0.5"
                  style={{
                    background: isLight ? "rgba(14,165,233,0.08)" : "rgba(14,165,233,0.1)",
                    color: isLight ? "#0ea5e9" : "#38bdf8",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </a>

            {/* ─── Socials ─────────────────────── */}
            <div className="flex flex-col items-center gap-6">
              {/* Divider */}
              <div className="flex items-center gap-4 w-full max-w-xs">
                <div
                  className="h-px flex-1"
                  style={{ background: isLight ? "rgba(226,232,240,0.8)" : "rgba(255,255,255,0.06)" }}
                />
                <span
                  className="text-[10px] uppercase tracking-[0.3em] font-semibold whitespace-nowrap"
                  style={{ color: isLight ? "#94a3b8" : "#334155" }}
                >
                  {t("Find me on")}
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: isLight ? "rgba(226,232,240,0.8)" : "rgba(255,255,255,0.06)" }}
                />
              </div>

              <div className="flex gap-5 flex-wrap justify-center">
                {SOCIALS.map((s, i) => (
                  <SocialButton
                    key={i}
                    href={s.href}
                    icon={s.icon}
                    label={s.label}
                    isLight={isLight}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ─── Bottom accent bar ───────────── */}
          <div
            className="h-0.5 w-full"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #8b5cf6 30%, #0ea5e9 70%, transparent 100%)",
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </section>
  );
}