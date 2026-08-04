import { useTranslation } from "react-i18next";
import { HiArrowRight } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FeaturedProject } from "../Components/ProjectCard";
import ProjectCard from "../Components/ProjectCard";
import { useLanguage } from "../hooks/context/Language/LanguageContext";
import { dataProjects } from "../utils/data";

export default function MyProjects() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const featuredProjects = dataProjects.filter((project) => project.featured);
  const additionalProjects = dataProjects.filter((project) => !project.featured);

  return (
    <section
      id="my-projects"
      dir={language === "ar" ? "rtl" : "ltr"}
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="site-container projects-shell">
        <header className="projects-header">
          <span className="projects-eyebrow">
            <i aria-hidden="true" />
            {t("Selected Work")}
          </span>
          <h2 id="projects-heading">{t("Featured Projects")}</h2>
          <p>
            {t(
              "Production-oriented applications built across the full stack, from responsive interfaces to secure APIs and role-based workflows."
            )}
          </p>
        </header>

        <div
          className="featured-projects"
          aria-label={t("Featured project case studies")}
        >
          {featuredProjects.map((project, index) => (
            <FeaturedProject
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        <section
          className="additional-projects"
          aria-labelledby="additional-projects-heading"
        >
          <header className="additional-projects-header">
            <div>
              <span>{t("More Projects")}</span>
              <h2 id="additional-projects-heading">{t("Additional Work")}</h2>
            </div>
            <p>
              {t(
                "Additional frontend and full-stack work, each linked to its live implementation and source."
              )}
            </p>
          </header>

          <div className="project-grid">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <footer className="projects-footer">
          <p>{t("Explore the complete project archive on GitHub.")}</p>
          <a
            href="https://github.com/aymanbajar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("View all projects on GitHub")}
          >
            <SiGithub aria-hidden="true" />
            <span>{t("View all projects on GitHub")}</span>
            <HiArrowRight aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
}
