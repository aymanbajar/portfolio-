import { useTranslation } from "react-i18next";
import { HiOutlineExternalLink, HiOutlineShoppingBag } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import type { ProjectData, TechItem } from "../utils/data";
import { useTheme } from "../hooks/context/Theme/ThemeContext";

interface ProjectVisualProps {
  project: ProjectData;
}

function ProjectVisual({ project }: ProjectVisualProps) {
  const { t } = useTranslation();

  return (
    <div className="project-media">
      {project.imageUrl && project.imageWidth && project.imageHeight ? (
        <img
          src={project.imageUrl}
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className="project-placeholder"
          role="img"
          aria-label={project.imageAlt}
        >
          <span className="project-placeholder-icon" aria-hidden="true">
            <HiOutlineShoppingBag />
          </span>
          <span className="project-placeholder-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <strong>{project.title}</strong>
          <small>{t("Project preview")}</small>
        </div>
      )}
    </div>
  );
}

function TechnologyList({
  technologies,
  projectTitle,
}: {
  technologies: TechItem[];
  projectTitle: string;
}) {
  const { t } = useTranslation();

  return (
    <ul
      className="project-technologies"
      aria-label={t("Technologies used in {{title}}", { title: projectTitle })}
    >
      {technologies.map((technology) => {
        const Icon = technology.icon;
        return (
          <li
            key={technology.label}
            title={technology.label}
            aria-label={technology.label}
          >
            <Icon aria-hidden="true" style={{ color: technology.color }} />
            <span className="project-tech-name">{technology.label}</span>
          </li>
        );
      })}
    </ul>
  );
}

interface ProjectActionsProps {
  project: ProjectData;
}

function ProjectActions({ project }: ProjectActionsProps) {
  const { t } = useTranslation();
  const hasMainAction = Boolean(project.liveUrl || project.repositoryUrl);

  return (
    <div className="project-action-area">
      <div className="project-divider" aria-hidden="true" />

      {hasMainAction && (
        <div className="project-actions">
          {project.liveUrl && (
            <a
              className="project-action project-action-primary"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("Open live demo for {{title}}", {
                title: project.title,
              })}
            >
              <HiOutlineExternalLink aria-hidden="true" />
              <span>{t("Live Demo")}</span>
            </a>
          )}

          {project.repositoryUrl && (
            <a
              className={`project-action project-action-github ${
                project.liveUrl ? "" : "is-wide"
              }`}
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("View source code for {{title}}", {
                title: project.title,
              })}
            >
              <SiGithub aria-hidden="true" />
              <span className={project.liveUrl ? "project-visually-hidden" : ""}>
                {t("View Code")}
              </span>
            </a>
          )}
        </div>
      )}

    </div>
  );
}

interface ProjectCardProps {
  project: ProjectData;
  featuredIndex?: number;
}

export default function ProjectCard({
  project,
  featuredIndex,
}: ProjectCardProps) {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <article className="project-card " aria-labelledby={`${project.slug}-title`}>
      <ProjectVisual project={project} />

      <div className={`project-card-content  ${isLight
              ? "bg-white "
              : "bg-white/5"
            }`}>
        <div className="project-meta">
          <span className="project-category">{t(project.category)}</span>
          <span>{project.role}</span>
          {featuredIndex !== undefined && (
            <span className="featured-label">
              {t("Featured")} {String(featuredIndex + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        <h3 id={`${project.slug}-title`}>{project.title}</h3>
        <p className="project-description">{project.shortDescription}</p>

        <TechnologyList
          technologies={project.technologies}
          projectTitle={project.title}
        />

        <ProjectActions project={project} />
      </div>
    </article>
  );
}

export function FeaturedProject({
  project,
  index,
}: {
  project: ProjectData;
  index: number;
}) {
  return (
    <ProjectCard
      project={project}
      featuredIndex={index}
    />
  );
}
