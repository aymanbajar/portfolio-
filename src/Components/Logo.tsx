import { useTranslation } from "react-i18next";

export default function Logo() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      {/* Monogram Circle */}
      <div className="relative flex items-center justify-center w-11 h-11 md:w-13 md:h-13 shrink-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 56 56">
          <defs>
            <linearGradient id="ring1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
            <linearGradient id="textGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#c084fc" />
            </linearGradient>
          </defs>
          <circle
            cx="28"
            cy="28"
            r="26"
            fill="none"
            stroke="url(#ring1)"
            strokeWidth="2"
            className="transition-all duration-500 group-hover:opacity-80"
          />{" "}
          <circle
            cx="28"
            cy="28"
            r="21"
            fill="none"
            stroke="url(#ring1)"
            strokeWidth="0.5"
            opacity="0.4"
          />
       <text x="28" y="36" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fontSize="28" fill="url(#textGrad)" > A </text>
        </svg>
      </div>

      {/* Name row */}
      <div className="flex flex-col gap-[2px]">
        {/* AYMAN + Developer badge in one row */}
        <div className="flex items-center gap-2">
          {/* AYMAN */}
          <span
            className="font-black tracking-[0.22em] uppercase text-base md:text-lg lg:text-xl transition-all duration-500 group-hover:tracking-[0.30em]"
            style={{
              background:
                "linear-gradient(to right, #38bdf8, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("AYMAN")}
          </span>

          {/* Developer glass badge */}
          <span
            className="
              relative overflow-hidden
              text-[9px] md:text-[10px] font-semibold tracking-[0.2em] uppercase
              px-2 py-[3px] rounded-full
              border border-cyan-300/30
              backdrop-blur-md
              text-sky-300
              transition-all duration-500
              group-hover:border-cyan-300/60
              group-hover:text-sky-200
            "
            style={{
              background:
                "linear-gradient(135deg, rgba(56,189,248,0.15), rgba(129,140,248,0.15), rgba(192,132,252,0.12))",
            }}
          >
            {/* inner shimmer layer */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(135deg, rgba(56,189,248,0.25), rgba(192,132,252,0.20))",
              }}
            />
            <span className="relative z-10">{t("Developer")}</span>
          </span>
        </div>

        {/* Animated underline */}
        <span
          className="h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{
            background: "linear-gradient(to right, #38bdf8, #818cf8, #c084fc)",
          }}
        />
      </div>
    </div>
  );
}
