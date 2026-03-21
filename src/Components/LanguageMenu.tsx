import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/context/Language/LanguageContext";
import { useTheme } from "../hooks/context/Theme/ThemeContext";
import { useState, useRef, useEffect } from "react";

const languages = [
  { value: "ar", flag: "🇸🇦", labelKey: "Arabic",  short: "AR" },
  { value: "en", flag: "🇬🇧", labelKey: "English", short: "EN" },
  { value: "tr", flag: "🇹🇷", labelKey: "Turkish", short: "TR" },
];

export default function LanguageMenu() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isLight = theme === "light";

  const current = languages.find((l) => l.value === language) ?? languages[0];

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative font-Cairo-Eng">

      {/* Trigger button */}
      <button
        onClick={() => setOpen((p) => !p)}
        className={`
          relative flex items-center gap-2 px-3 py-2 rounded-xl
          text-sm font-semibold tracking-wide
          border transition-all duration-300 cursor-pointer
          backdrop-blur-xl select-none
          ${isLight
            ? "border-white/30 text-gray-700 hover:text-gray-900"
            : "border-white/10 text-gray-300 hover:text-white"
          }
        `}
        style={{
          background: open
            ? "linear-gradient(135deg, rgba(56,189,248,0.18), rgba(192,132,252,0.14))"
            : "linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.03))",
          boxShadow: open
            ? "0 0 16px rgba(129,140,248,0.25), inset 0 1px 0 rgba(255,255,255,0.15)"
            : "inset 0 1px 0 rgba(255,255,255,0.10)",
        }}
      >
        {/* Top shimmer */}
        <div className="absolute top-0 left-2 right-2 h-px rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

        <span className="text-base leading-none">{current.flag}</span>
        <span>{current.short}</span>

        {/* Chevron */}
        <svg
          className={`w-3 h-3 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 12 12" fill="none"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Dropdown */}
      <div
        className={`
          absolute z-50 mt-2 w-40 rounded-2xl overflow-hidden
          border backdrop-blur-2xl
          transition-all duration-300 origin-top
          ${open ? "opacity-100 scale-100 translate-y-0 pointer-events-auto" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
          ${isLight ? "border-white/25" : "border-white/10"}
        `}
        style={{
          background: isLight
            ? "linear-gradient(135deg, rgba(255,255,255,0.75), rgba(241,245,249,0.70))"
            : "linear-gradient(135deg, rgba(15,23,42,0.80), rgba(30,41,59,0.75))",
          boxShadow: "0 16px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12)",
        }}
      >
        {/* Top shimmer */}
        <div className="absolute top-0 left-3 right-3 h-px rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* Ambient glow */}
        <div
          className="absolute inset-0 -z-10 blur-2xl opacity-20"
          style={{ background: "linear-gradient(to right, #38bdf8, #818cf8, #c084fc)" }}
        />

        <ul className="py-1.5 px-1.5 flex flex-col gap-0.5">
          {languages.map(({ value, flag, labelKey }) => {
            const isActive = language === value;
            return (
              <li key={value}>
                <button
                  onClick={() => { setLanguage(value); setOpen(false); }}
                  className={`
                    relative w-full flex items-center gap-3 px-3 py-2 rounded-xl
                    text-sm font-medium tracking-wide text-left
                    transition-all duration-200 cursor-pointer group
                    ${isActive
                      ? "text-white"
                      : isLight
                        ? "text-gray-600 hover:text-gray-900"
                        : "text-gray-400 hover:text-gray-100"
                    }
                  `}
                  style={isActive ? {
                    background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
                    boxShadow: "0 0 12px rgba(129,140,248,0.45)",
                  } : {}}
                >
                  {/* Hover ghost */}
                  {!isActive && (
                    <span
                      className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{
                        background: "linear-gradient(135deg, rgba(56,189,248,0.10), rgba(192,132,252,0.10))",
                      }}
                    />
                  )}

                  <span className="text-base leading-none">{flag}</span>
                  <span className="relative z-10">{t(labelKey)}</span>

                  {/* Active check */}
                  {isActive && (
                    <svg className="ml-auto w-3.5 h-3.5 text-white" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7l4 4 6-6" stroke="currentColor" strokeWidth="2"
                        strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}