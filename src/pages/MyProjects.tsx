import { useTranslation } from "react-i18next";
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
      className="site-container projects-shell"
      aria-labelledby="projects-heading">
        <header className="projects-header">
          <span className="projects-eyebrow">
            <i aria-hidden="true" />
            {t("Selected Work")}
          </span>
          <h2  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-center"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} id="projects-heading">{t("Featured Projects")}</h2>
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
          <header className="additional-projects-header ">
            <div>
              <span>{t("More Projects")}</span>
              <h2  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight "
            style={{
              background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} id="additional-projects-heading">{t("Additional Work")}</h2>
            </div>
            <p
            >
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
      </section>
    );
}
