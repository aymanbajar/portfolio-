import { useTranslation } from "react-i18next";
import { HiArrowRight, HiOutlineDownload } from "react-icons/hi";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { useLanguage } from "../hooks/context/Language/LanguageContext";

export default function Home() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section
      dir={language === "ar" ? "rtl" : "ltr"}
      className="hero"
      aria-labelledby="hero-title"
    >
      <div className="hero-decoration" aria-hidden="true" />

      <div className="site-container hero-grid">
        <div className="hero-copy">
          <div className="availability-badge hero-reveal">
            <span className="availability-dot" aria-hidden="true" />
            {t("Available for work")}
          </div>

          <div className="hero-heading-group hero-reveal hero-reveal-delay-1">
            <p className="hero-eyebrow">{t("Hi, I'm")}</p>
            <h1 id="hero-title" className="hero-title">
              {t("Ayman Bajar")}
            </h1>
            <h2 className="hero-role">{t("Full Stack Developer")}</h2>
          </div>

          <p className="hero-description hero-reveal hero-reveal-delay-2">
            {t(
              "I build responsive, secure, and production-ready web applications using modern frontend and backend technologies."
            )}
          </p>

          <div className="hero-actions hero-reveal hero-reveal-delay-3">
            <a className="button button-primary" href="#my-projects">
              {t("View My Projects")}
              <HiArrowRight aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#contact">
              {t("Contact Me")}
            </a>
            <a
              className="button button-tertiary"
              href="/cv.pdf"
              download="Ayman-Bajar-CV.pdf"
              aria-label={t("Download My Cv")}
            >
              <HiOutlineDownload aria-hidden="true" />
              {t("Download My Cv")}
            </a>
          </div>

          <div className="hero-socials hero-reveal hero-reveal-delay-3">
            <span>{t("Professional profiles")}</span>
            <div className="hero-social-links">
              <a
                href="https://github.com/aymanbajar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("Visit GitHub profile")}
                title="GitHub"
              >
                <SiGithub aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/eymenbacar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("Visit LinkedIn profile")}
                title="LinkedIn"
              >
                <SiLinkedin aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-visual hero-reveal hero-reveal-delay-2">
          <div className="portrait-accent" aria-hidden="true" />
          <figure className="portrait-frame">
            <img
              src="/myPhoto.jpg"
              alt={t("Portrait of Ayman Bajar")}
              width="1333"
              height="1600"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="portrait-caption">
              <strong>{t("Ayman Bajar")}</strong>
              <span>{t("Full Stack Developer")}</span>
            </figcaption>
          </figure>
          <div className="portrait-status" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
