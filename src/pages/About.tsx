import { useTranslation } from "react-i18next";
import { useTheme } from "../hooks/context/Theme/ThemeContext";
import { useLanguage } from "../hooks/context/Language/LanguageContext";
import NetworkAnimation from "../Components/NetworkAnimation";
import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNextdotjs, SiNodedotjs, SiExpress, SiNestjs, SiFastapi,
  SiMongodb, SiMysql, SiPostgresql, SiPrisma, SiPostman,
  SiTailwindcss, SiGit, SiGithub, SiDocker,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const skills = [
  { icon: SiHtml5,      name: "HTML5",      color: "#e34f26" },
  { icon: SiCss3,       name: "CSS3",       color: "#1572b6" },
  { icon: SiJavascript, name: "JavaScript", color: "#f7df1e" },
  { icon: SiTypescript, name: "TypeScript", color: "#3178c6" },
  { icon: SiReact,      name: "React",      color: "#61dafb" },
  { icon: SiNextdotjs,  name: "Next.js",    color: "#888888" },
  { icon: SiNodedotjs,  name: "Node.js",    color: "#339933" },
  { icon: SiExpress,    name: "Express",    color: "#888888" },
  { icon: TbApi,        name: "REST API",   color: "#6366f1" },
  { icon: SiNestjs,     name: "NestJS",     color: "#e0234e" },
  { icon: SiFastapi,    name: "FastAPI",    color: "#009688" },
  { icon: SiMongodb,    name: "MongoDB",    color: "#47a248" },
  { icon: SiMysql,      name: "MySQL",      color: "#4479a1" },
  { icon: SiPostgresql, name: "PostgreSQL", color: "#4169e1" },
  { icon: SiPrisma,     name: "Prisma",     color: "#64748b" },
  { icon: SiTailwindcss,name: "Tailwind",   color: "#38bdf8" },
  { icon: SiPostman,    name: "Postman",    color: "#ff6c37" },
  { icon: SiGit,        name: "Git",        color: "#f05032" },
  { icon: SiGithub,     name: "GitHub",     color: "#888888" },
  { icon: SiDocker,     name: "Docker",     color: "#2496ed" },
];

export default function About() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { language } = useLanguage();

  const isLight = theme === "light";
  const isRtl   = language === "ar";

  return (
    <section
      id="about"
      dir={isRtl ? "rtl" : "ltr"}
      className={`
        relative min-h-screen overflow-hidden
        flex flex-col items-center justify-center
        px-5 sm:px-8 md:px-12 lg:px-20 py-24 gap-20
        ${isRtl ? "font-Cairo" : "font-Cairo-Eng"}
        ${isLight ? "bg-slate-50 text-gray-900" : "bg-[#080c14] text-gray-100"}
      `}
    >
      {/* Network Animation */}
      <NetworkAnimation />

      {/* ── Background glow ── */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{
          background: isLight
            ? "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(129,140,248,0.10) 0%, transparent 70%)"
            : "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(129,140,248,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ══════════════════════════════
          ABOUT ME
      ══════════════════════════════ */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-8">

        {/* Section heading */}
        <div className="flex flex-col items-center gap-3">
          <span className={`
            text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase
            px-4 py-1.5 rounded-full border backdrop-blur-md
            ${isLight
              ? "border-sky-200/60 text-sky-600 bg-sky-50/60"
              : "border-white/10 text-sky-300 bg-white/5"
            }
          `}>
            {t("Who I Am")}
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-center"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("About Me")}
          </h2>

          {/* Divider */}
          <div className="flex items-center gap-3 w-24 sm:w-32">
            <div className="flex-1 h-px rounded-full"
              style={{ background: "linear-gradient(to right, transparent, #38bdf8)" }} />
            <div className="w-1.5 h-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg, #38bdf8, #c084fc)" }} />
            <div className="flex-1 h-px rounded-full"
              style={{ background: "linear-gradient(to left, transparent, #c084fc)" }} />
          </div>
        </div>

        {/* Bio card */}
        <div
          className={`
            relative overflow-hidden w-full
            rounded-3xl border p-6 sm:p-8 md:p-10
            backdrop-blur-xl
            transition-all duration-500 hover:scale-[1.01]
            ${isLight
              ? "bg-white/60 border-white/50 shadow-xl shadow-sky-100/40"
              : "bg-white/5 border-white/10 shadow-xl shadow-black/30"
            }
          `}
          style={{
            boxShadow: isLight
              ? "0 8px 40px rgba(56,189,248,0.10), inset 0 1px 0 rgba(255,255,255,0.8)"
              : "0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Top shimmer */}
          <div className="absolute top-0 left-8 right-8 h-px rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Ambient corner glow */}
          <div
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #38bdf8, #818cf8)" }}
          />

          {/* Quote mark */}
          <span
            className="absolute top-4 left-6 text-6xl font-black leading-none opacity-10 pointer-events-none select-none"
            style={{ color: "#818cf8" }}
          >
            "
          </span>

          <p className={`
            relative z-10 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose
            ${isLight ? "text-gray-700" : "text-gray-300"}
          `}>
            {t("I'm a Full Stack Developer with strong experience in building modern and scalable backend systems, in addition to developing clean, responsive, and user-friendly frontend interfaces. I focus on creating secure APIs, managing databases, and designing efficient server architectures that can scale with growth. I'm passionate about delivering reliable, high-performance digital solutions and building seamless user experiences that combine the power of the backend with the elegance of the frontend")}
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full">
          {[
            { value: "+2",  label: t("Years Exp.") },
            { value: "+6", label: t("Projects")   },
            { value: String(skills.length), label: t("Skills") },
          ].map(({ value, label }) => (
            <div
              key={label}
              className={`
                relative overflow-hidden flex flex-col items-center justify-center
                gap-1 py-4 sm:py-5 rounded-2xl border backdrop-blur-md
                transition-all duration-300 hover:scale-105
                ${isLight
                  ? "bg-white/60 border-white/50"
                  : "bg-white/5 border-white/10"
                }
              `}
              style={{
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
              }}
            >
              <div className="absolute top-0 left-4 right-4 h-px rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />
              <span
                className="text-2xl sm:text-3xl font-black"
                style={{
                  background: "linear-gradient(135deg, #38bdf8, #818cf8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {value}
              </span>
              <span className={`text-xs sm:text-sm font-medium tracking-wide ${isLight ? "text-gray-500" : "text-gray-400"}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════
          MY SKILLS
      ══════════════════════════════ */}
      <div className="w-full max-w-4xl flex flex-col items-center gap-8">

        {/* Section heading */}
        <div className="flex flex-col items-center gap-3">
          <span className={`
            text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase
            px-4 py-1.5 rounded-full border backdrop-blur-md
            ${isLight
              ? "border-purple-200/60 text-purple-600 bg-purple-50/60"
              : "border-white/10 text-purple-300 bg-white/5"
            }
          `}>
            {t("What I Use")}
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-center"
            style={{
              background: "linear-gradient(135deg, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {t("My Skills")}
          </h2>

          <div className="flex items-center gap-3 w-24 sm:w-32">
            <div className="flex-1 h-px rounded-full"
              style={{ background: "linear-gradient(to right, transparent, #818cf8)" }} />
            <div className="w-1.5 h-1.5 rounded-full"
              style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)" }} />
            <div className="flex-1 h-px rounded-full"
              style={{ background: "linear-gradient(to left, transparent, #c084fc)" }} />
          </div>
        </div>

        {/* Skills grid */}
        <div
          className={`
            relative w-full overflow-hidden
            rounded-3xl border p-5 sm:p-7 md:p-9
            backdrop-blur-xl
            ${isLight
              ? "bg-white/60 border-white/50 shadow-xl shadow-purple-100/30"
              : "bg-white/5 border-white/10 shadow-xl shadow-black/30"
            }
          `}
          style={{
            boxShadow: isLight
              ? "0 8px 40px rgba(129,140,248,0.10), inset 0 1px 0 rgba(255,255,255,0.8)"
              : "0 8px 40px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Top shimmer */}
          <div className="absolute top-0 left-8 right-8 h-px rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          {/* Ambient glow */}
          <div
            className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)" }}
          />

          <ul className="relative z-10 grid grid-cols-3 xs:grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3 sm:gap-4">
            {skills.map(({ icon: Icon, name, color }) => (
              <li key={name} className="group flex flex-col items-center gap-2">
                <div
                  className={`
                    relative flex items-center justify-center
                    w-12 h-12 sm:w-14 sm:h-14 rounded-2xl
                    border backdrop-blur-md
                    transition-all duration-300
                    hover:scale-110 hover:-translate-y-1 cursor-pointer
                    ${isLight
                      ? "bg-white/70 border-gray-200/60"
                      : "bg-white/8 border-white/10"
                    }
                  `}
                  style={{
                    boxShadow: `0 4px 16px ${color}22`,
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 6px 24px ${color}55`;
                    (e.currentTarget as HTMLElement).style.borderColor = `${color}55`;
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${color}22`;
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                  }}
                >
                  <Icon style={{ color, fontSize: "1.6rem" }} />
                </div>
                <span className={`
                  text-[10px] sm:text-xs font-medium tracking-wide
                  transition-all duration-300
                  group-hover:opacity-100 opacity-60
                  ${isLight ? "text-gray-600" : "text-gray-400"}
                `}>
                  {name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
