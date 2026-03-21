import { useTranslation } from 'react-i18next';
import { useTheme }    from '../hooks/context/Theme/ThemeContext';
import { useLanguage } from '../hooks/context/Language/LanguageContext';
import NetworkAnimation from '../Components/NetworkAnimation';
import { dataProjects } from '../utils/data';
import type { ProjectData, TechItem } from '../utils/data';
import { useEffect, useRef, useState, useMemo } from 'react';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

// ─── TechPill ─────────────────────────────────────────────────────────────────
// Renders a single icon-only square with brand-color glow on hover.
function TechPill({ tech, isLight }: { tech: TechItem; isLight: boolean }) {
  const [hov, setHov] = useState(false);
  const Icon = tech.icon;

  return (
    <span
      title={tech.label}
      aria-label={tech.label}
      role="img"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      className={`
        inline-flex items-center justify-center
        w-8 h-8 rounded-lg cursor-default select-none
        transition-all duration-200
        ${hov ? 'scale-[1.15] -translate-y-0.5' : 'scale-100'}
        ${isLight
          ? 'bg-gray-50 border border-gray-200'
          : 'bg-white/[0.04] border border-white/[0.08]'}
      `}
      style={{
        boxShadow: hov
          ? `0 0 0 1.5px ${tech.color}55, 0 6px 18px ${tech.color}30`
          : undefined,
      }}
    >
      <Icon
        size={16}
        aria-hidden
        style={{
          color:      tech.color,
          transition: 'all 0.18s ease',
        }}
      />
    </span>
  );
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────
interface CardProps {
  project:   ProjectData;
  index:     number;
  isLight:   boolean;
  isVisible: boolean;
}

function ProjectCard({ project, index, isLight, isVisible }: CardProps) {
  const [hov, setHov] = useState(false);
  const hasImage      = Boolean(project.imageUrl);
  const { t } = useTranslation();

  const MAX = 6;
  const visible = project.toolsUsed.slice(0, MAX);
  const extra   = project.toolsUsed.length - MAX;

  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      aria-label={`Project: ${project.title}`}
      style={{
        opacity:         isVisible ? 1 : 0,
        transform:       isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.96)',
        filter:          isVisible ? 'blur(0)' : 'blur(6px)',
        transitionDelay: `${index * 80}ms`,
        transition:      'opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1), filter 0.7s ease',
      }}
      className={`
        group relative flex flex-col overflow-hidden rounded-2xl
        border transition-all duration-300
        ${hov ? '-translate-y-1' : ''}
        ${isLight
          ? `bg-white border-gray-200/90
             ${hov ? 'shadow-[0_24px_64px_-12px_rgba(99,102,241,0.16)] border-indigo-200/70' : 'shadow-[0_1px_8px_rgba(0,0,0,0.07)]'}`
          : `bg-[#0d1117] border-white/[0.06]
             ${hov ? 'shadow-[0_24px_64px_-12px_rgba(99,102,241,0.12)] border-white/[0.12]' : ''}`
        }
      `}
    >
      {/* ── Index badge ── */}
      <span
        aria-hidden="true"
        className={`
          absolute top-3 right-3 z-20
          text-[9px] font-black tracking-[0.18em] uppercase
          px-2 py-[3px] rounded-full backdrop-blur-sm
          ${isLight
            ? 'bg-white/80 text-indigo-300 border border-indigo-100/80'
            : 'bg-black/50 text-white/30 border border-white/[0.06]'}
        `}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* ── Thumbnail ── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '16/9', background: isLight ? '#f1f5f9' : '#090e18' }}
      >
        {hasImage ? (
          <>
            <img
              src={project.imageUrl}
              alt={`Screenshot of ${project.title}`}
              loading="lazy"
              decoding="async"
              className={`
                w-full h-full object-cover
                transition-transform duration-700 ease-out
                ${hov ? 'scale-[1.07]' : 'scale-100'}
              `}
            />
            {/* Bottom-fade */}
            <div
              aria-hidden="true"
              className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
              style={{
                background: isLight
                  ? 'linear-gradient(to bottom, transparent, #ffffff)'
                  : 'linear-gradient(to bottom, transparent, #0d1117)',
              }}
            />
            {/* Hover color veil */}
            <div
              aria-hidden="true"
              className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${hov ? 'opacity-100' : 'opacity-0'}`}
              style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.07) 0%, transparent 60%)' }}
            />
          </>
        ) : (
          /* No-image placeholder */
          <div className="w-full h-full flex items-center justify-center">
            <div
              aria-hidden="true"
              className="w-12 h-12 rounded-2xl flex items-center justify-center"
              style={{
                background: isLight ? 'rgba(99,102,241,0.08)' : 'rgba(129,140,248,0.08)',
                border: `1px solid ${isLight ? 'rgba(99,102,241,0.15)' : 'rgba(129,140,248,0.12)'}`,
              }}
            >
              <SiGithub size={20} style={{ color: isLight ? '#c7d2fe' : '#4b5563' }} aria-hidden />
            </div>
          </div>
        )}
      </div>

      {/* ── Body ── */}
      <div className="flex flex-col flex-1 px-5 pt-4 pb-5 gap-3">

        {/* Title */}
        <h3
          className="text-[14.5px] font-bold tracking-tight leading-snug transition-colors duration-200"
          style={{ color: hov ? (isLight ? '#4f46e5' : '#a5b4fc') : (isLight ? '#111827' : '#f9fafb') }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-[12.5px] leading-[1.65] line-clamp-2 flex-1 ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
          {project.description}
        </p>

        {/* Tech icons */}
        {project.toolsUsed.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap pt-0.5" aria-label="Technologies used">
            {visible.map((tech) => (
              <TechPill key={tech.label} tech={tech} isLight={isLight} />
            ))}
            {extra > 0 && (
              <span
                aria-label={`${extra} more`}
                className={`
                  inline-flex items-center justify-center w-8 h-8 rounded-lg
                  text-[9px] font-black tabular-nums
                  ${isLight
                    ? 'bg-gray-50 text-gray-400 border border-gray-200'
                    : 'bg-white/[0.03] text-gray-600 border border-white/[0.07]'}
                `}
              >
                +{extra}
              </span>
            )}
          </div>
        )}

        {/* Divider */}
        <div className={`h-px w-full ${isLight ? 'bg-gray-100' : 'bg-white/[0.05]'}`} />

        {/* CTAs */}
        <div className="flex items-center gap-2">
          {/* Live Demo */}
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live demo — ${project.title}`}
              className={`
                flex-1 inline-flex items-center justify-center gap-1.5
                py-[7px] px-3 rounded-xl text-[11.5px] font-semibold tracking-wide
                transition-all duration-200 active:scale-95
                ${isLight
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-[0_2px_10px_rgba(99,102,241,0.28)] hover:shadow-[0_4px_16px_rgba(99,102,241,0.4)]'
                  : 'bg-indigo-500/[0.16] text-indigo-300 hover:bg-indigo-500/[0.26] border border-indigo-500/20'}
              `}
            >
              <FiExternalLink size={11} aria-hidden />
              {t('Live Demo')}
            </a>
          ) : (
            <span
              className={`
                flex-1 inline-flex items-center justify-center gap-1.5
                py-[7px] px-3 rounded-xl text-[11.5px] font-semibold tracking-wide
                cursor-not-allowed opacity-40
                ${isLight ? 'bg-gray-100 text-gray-400' : 'bg-white/[0.03] text-gray-600 border border-white/[0.05]'}
              `}
            >
              <FiExternalLink size={11} aria-hidden />
              No Demo
            </span>
          )}

          {/* GitHub */}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`GitHub — ${project.title}`}
            className={`
              inline-flex items-center justify-center w-[34px] h-[34px] rounded-xl
              transition-all duration-200 active:scale-95
              ${isLight
                ? 'bg-gray-100 text-gray-500 hover:bg-gray-800 hover:text-white'
                : 'bg-white/[0.05] text-gray-500 hover:bg-white/[0.12] hover:text-gray-200 border border-white/[0.07]'}
            `}
          >
            <SiGithub size={14} aria-hidden />
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── MyProjects ───────────────────────────────────────────────────────────────
export default function MyProjects() {
  const { theme }    = useTheme();
  const { language } = useLanguage();
  const { t }        = useTranslation();

  const isLight = theme === 'light';
  const isRtl   = language === 'ar';

  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (prefersReducedMotion) {
      setVisibleCards(new Set(dataProjects.map((_, i) => i)));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            setVisibleCards((prev) => new Set([...prev, i]));
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
    cardRefs.current.forEach((r) => { if (r) observer.observe(r); });
    return () => observer.disconnect();
  }, [prefersReducedMotion]);

  const grain = useMemo(
    () => `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
    []
  );

  return (
    <section
      id="my-projects"
      dir={isRtl ? 'rtl' : 'ltr'}
      aria-label={t('My Projects')}
      className={`
        relative min-h-screen overflow-hidden flex flex-col items-center
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-28
        py-24 sm:py-32 gap-14 sm:gap-18
        ${isRtl ? 'font-Cairo' : 'font-Cairo-Eng'}
        ${isLight ? 'bg-slate-50 text-gray-900' : 'bg-[#080c14] text-gray-100'}
      `}
    >

      {/* Network Animation */}
      <NetworkAnimation />

      {/* ───── Backgrounds ───── */}
      {!isLight && (
        <>
          {/* Deep-space sweep */}
          <div aria-hidden className="absolute inset-0 -z-20 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 130% 60% at 50% -8%, #0f1c35 0%, #060b14 58%)' }} />
          {/* Left aurora */}
          <div aria-hidden className="absolute -left-40 top-1/4 -z-10 pointer-events-none rounded-full"
            style={{ width: 480, height: 480, background: 'radial-gradient(circle, rgba(56,189,248,0.13) 0%, transparent 70%)', filter: 'blur(50px)', willChange: 'transform' }} />
          {/* Right aurora */}
          <div aria-hidden className="absolute -right-40 bottom-1/4 -z-10 pointer-events-none rounded-full"
            style={{ width: 420, height: 420, background: 'radial-gradient(circle, rgba(129,140,248,0.11) 0%, transparent 70%)', filter: 'blur(50px)', willChange: 'transform' }} />
          {/* Top beam */}
          <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 -z-10 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, rgba(129,140,248,0.6), transparent)' }} />
          {/* Grain */}
          <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none opacity-[0.028]"
            style={{ backgroundImage: grain, backgroundSize: '200px 200px' }} />
        </>
      )}
      {isLight && (
        <div aria-hidden className="absolute inset-0 -z-10 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 90% 45% at 50% 0%, rgba(99,102,241,0.06) 0%, transparent 70%)' }} />
      )}

      {/* ───── Heading ───── */}
      <header className="relative z-10 flex flex-col items-center gap-5 text-center w-full max-w-lg">

        {/* Eyebrow pill */}
        <div
          className={`
            inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.28em] uppercase
            ${isLight
              ? 'bg-indigo-50 text-indigo-500 border border-indigo-100'
              : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'}
          `}
        >
          {/* Dot */}
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: isLight ? '#6366f1' : '#818cf8' }}
            aria-hidden
          />
          {t('Portfolio')}
        </div>

        {/* Title */}
        <div className="relative">
          <h1 className={`
            text-[2.5rem] sm:text-5xl md:text-[3.4rem]
            font-black tracking-tight leading-[0.9]
            ${isLight ? 'text-gray-900' : 'text-white'}
          `}>
            <span style={{
              background: 'linear-gradient(130deg, #38bdf8 0%, #818cf8 48%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {t('My Projects')}
            </span>
          </h1>

          {/* Glow echo — dark only */}
          {!isLight && (
            <span aria-hidden className="
              absolute inset-0 flex items-center justify-center
              text-[2.5rem] sm:text-5xl md:text-[3.4rem] font-black tracking-tight leading-[0.9]
              -z-10 blur-2xl opacity-[0.18] select-none pointer-events-none
            " style={{
              background: 'linear-gradient(130deg, #38bdf8, #818cf8, #c084fc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              {t('My Projects')}
            </span>
          )}
        </div>

        {/* Subtitle */}
        <p className={`text-[13px] sm:text-sm leading-relaxed max-w-xs ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
          {t('Hand-crafted digital experiences — from architecture to deployment.')}
        </p>

        {/* Stats bar */}
        <div className={`
          flex items-stretch rounded-2xl overflow-hidden border mt-1
          ${isLight ? 'bg-white border-gray-200 shadow-sm' : 'bg-white/[0.025] border-white/[0.07]'}
        `}>
          {([
            { n: String(dataProjects.length), label: t('Projects') },
            { n: '100%',                       label: t('Responsive') },
            { n: '2+',                          label: t('Yrs Exp.') },
          ] as const).map(({ n, label }, i, arr) => (
            <div
              key={label}
              className={`
                flex flex-col items-center justify-center gap-0.5 px-6 py-3
                ${i < arr.length - 1
                  ? isLight ? 'border-r border-gray-100' : 'border-r border-white/[0.06]'
                  : ''}
              `}
            >
              <span
                className="text-[1.1rem] font-black tabular-nums leading-none"
                style={{
                  background: 'linear-gradient(135deg, #38bdf8, #818cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {n}
              </span>
              <span className={`text-[9px] tracking-widest uppercase font-semibold ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </header>

      {/* ───── Decorative divider ───── */}
      <div aria-hidden className="relative z-10 w-full max-w-5xl flex items-center gap-3">
        <div className="flex-1 h-px" style={{
          background: isLight
            ? 'linear-gradient(to right, transparent, rgba(99,102,241,0.2), transparent)'
            : 'linear-gradient(to right, transparent, rgba(129,140,248,0.13), transparent)',
        }} />
        <div className="flex gap-[5px] items-center">
          {[0.3, 0.6, 1].map((o, i) => (
            <div
              key={i}
              className="rounded-full"
              style={{ width: 4 + i * 1, height: 4 + i * 1, background: `rgba(129,140,248,${o})` }}
            />
          ))}
          {[0.6, 0.3].map((o, i) => (
            <div
              key={`r${i}`}
              className="rounded-full"
              style={{ width: 4 + (1 - i) * 1, height: 4 + (1 - i) * 1, background: `rgba(129,140,248,${o})` }}
            />
          ))}
        </div>
        <div className="flex-1 h-px" style={{
          background: isLight
            ? 'linear-gradient(to right, transparent, rgba(99,102,241,0.2), transparent)'
            : 'linear-gradient(to right, transparent, rgba(129,140,248,0.13), transparent)',
        }} />
      </div>

      {/* ───── Projects grid ───── */}
      <div
        className="relative z-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        aria-live="polite"
        aria-label={t('Project cards')}
      >
        {dataProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => { cardRefs.current[index] = el; }}
            data-index={index}
          >
            <ProjectCard
              project={project}
              index={index}
              isLight={isLight}
              isVisible={visibleCards.has(index)}
            />
          </div>
        ))}
      </div>

      {/* ───── CTA ───── */}
      <footer className="relative z-10 flex flex-col items-center gap-3 pt-2">
        <p className={`text-[10px] tracking-[0.25em] uppercase font-bold ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>
          {t('Want to see more?')}
        </p>

        <a
          href="https://github.com/aymanbajar"
          target="_blank"
          rel="noreferrer"
          aria-label={t('View GitHub profile — opens in new tab')}
          className={`
            group inline-flex items-center gap-2.5
            px-6 py-3 rounded-2xl
            text-[13px] font-semibold tracking-wide
            transition-all duration-300
            hover:scale-[1.04] active:scale-[0.97]
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500
            ${isLight
              ? 'bg-white text-gray-800 border border-gray-200 hover:border-indigo-200 shadow-sm hover:shadow-[0_8px_28px_rgba(99,102,241,0.14)]'
              : 'bg-white/[0.04] text-gray-200 border border-white/[0.08] hover:border-indigo-500/40 hover:bg-white/[0.08]'}
          `}
        >
          <SiGithub
            size={14}
            aria-hidden
            className={isLight ? 'text-gray-600' : 'text-gray-400'}
          />
          {t('View GitHub')}
          <svg
            className="w-3 h-3 transition-all duration-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
            viewBox="0 0 12 12" fill="none" stroke="currentColor"
            strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden
          >
            <path d="M1 6h10M7 2l4 4-4 4"/>
          </svg>
        </a>
      </footer>

    </section>
  );
}