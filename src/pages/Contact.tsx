import { useTranslation } from "react-i18next";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import NetworkAnimation from "../Components/NetworkAnimation";
import { useLanguage } from "../hooks/context/Language/LanguageContext";
import { useTheme } from "../hooks/context/Theme/ThemeContext";
import { useState } from "react";
import gmailLogo from "../assets/gmail-logo.png";

// ─── Socials Type ───────────────────────────────
type SocialItem = {
  href: string;
  icon?: IconType;
  image?: string;
  label: string;
};

// ─── Socials ─────────────────────────────────────
const SOCIALS: SocialItem[] = [
  {
    href: "https://github.com/aymanbajar",
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/eymenbacar/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://www.instagram.com/bajarayman/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://x.com/AymanBajar",
    icon: FaXTwitter,
    label: "X",
  },
  {
    href: "https://www.facebook.com/ayman.bajar.93",
    icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "mailto:eymenbacaryos@gmail.com",
    image: gmailLogo,
    label: "Gmail",
  },
];

// ─── Social Button ───────────────────────────────
function SocialButton({
  icon: Icon,
  image,
  href,
  label,
  isLight,
}: {
  icon?: IconType;
  image?: string;
  href: string;
  label: string;
  isLight: boolean;
}) {
  const [hover, setHover] = useState(false);
  const isGmail = label === "Gmail";

  return (
    <a
      href={href}
      target={href.startsWith("mailto:") ? "_self" : "_blank"}
      rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col items-center gap-2 group"
      style={{ textDecoration: "none" }}
    >
      <div
        className="w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300"
        style={{
          background: hover
            ? isGmail
              ? isLight
                ? "#ffffff"
                : "rgba(255,255,255,0.95)"
              : "linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)"
            : isLight
              ? "rgba(15,23,42,0.06)"
              : "rgba(255,255,255,0.07)",

          transform: hover ? "translateY(-5px)" : "translateY(0)",

          boxShadow: hover
            ? isGmail
              ? "0 16px 32px rgba(234,67,53,0.22), 0 0 0 1px rgba(234,67,53,0.15)"
              : "0 16px 32px rgba(59,130,246,0.3), 0 0 0 1px rgba(139,92,246,0.2)"
            : isLight
              ? "0 2px 8px rgba(15,23,42,0.08), 0 0 0 1px rgba(15,23,42,0.06)"
              : "0 2px 8px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={label}
            className="w-7 h-7 object-contain transition-all duration-300"
            style={{
              transform: hover ? "scale(1.08)" : "scale(1)",
            }}
          />
        ) : Icon ? (
          <Icon
            size={18}
            style={{
              color: hover ? "#fff" : isLight ? "#475569" : "#94a3b8",
              transition: "color 0.3s",
            }}
          />
        ) : null}
      </div>

      <span
        className="text-[10px] tracking-widest uppercase font-medium transition-all duration-300"
        style={{
          color: hover
            ? isGmail
              ? "#EA4335"
              : isLight
                ? "#3b82f6"
                : "#7dd3fc"
            : isLight
              ? "#94a3b8"
              : "#475569",
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
      {/* ─── Backgrounds unchanged ───────────── */}
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
              background:
                "linear-gradient(90deg, transparent 0%, #0ea5e9 30%, #8b5cf6 70%, transparent 100%)",
            }}
          />

          <div className="p-10 md:p-14">
            {/* ─── Header ──────────────────────── */}
            <div className="text-center mb-14">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div
                  className="h-px flex-1 max-w-[60px]"
                  style={{
                    background: isLight
                      ? "rgba(148,163,184,0.5)"
                      : "rgba(100,116,139,0.4)",
                  }}
                />

                <span
                  className="text-[10px] tracking-[0.35em] uppercase font-semibold"
                  style={{ color: isLight ? "#94a3b8" : "#4b5563" }}
                >
                  {t("Contact")}
                </span>

                <div
                  className="h-px flex-1 max-w-[60px]"
                  style={{
                    background: isLight
                      ? "rgba(148,163,184,0.5)"
                      : "rgba(100,116,139,0.4)",
                  }}
                />
              </div>

              <h1
                className="text-4xl md:text-[3.25rem] font-black leading-none tracking-tight mb-4"
                style={{
                  background:
                    "linear-gradient(135deg, #0ea5e9 0%, #6366f1 50%, #a855f7 100%)",
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

            {/* ─── Socials ─────────────────────── */}
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-4 w-full max-w-xs">
                <div
                  className="h-px flex-1"
                  style={{
                    background: isLight
                      ? "rgba(226,232,240,0.8)"
                      : "rgba(255,255,255,0.06)",
                  }}
                />

                <span
                  className="text-[10px] uppercase tracking-[0.3em] font-semibold whitespace-nowrap"
                  style={{ color: isLight ? "#94a3b8" : "#334155" }}
                >
                  {t("Find me on")}
                </span>

                <div
                  className="h-px flex-1"
                  style={{
                    background: isLight
                      ? "rgba(226,232,240,0.8)"
                      : "rgba(255,255,255,0.06)",
                  }}
                />
              </div>

              <div className="flex gap-5 flex-wrap justify-center">
                {SOCIALS.map((s, i) => (
                  <SocialButton
                    key={i}
                    href={s.href}
                    icon={s.icon}
                    image={s.image}
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
              background:
                "linear-gradient(90deg, transparent 0%, #8b5cf6 30%, #0ea5e9 70%, transparent 100%)",
              opacity: 0.5,
            }}
          />
        </div>
      </div>
    </section>
  );
}