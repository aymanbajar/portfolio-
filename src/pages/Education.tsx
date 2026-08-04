import { useTranslation } from "react-i18next";
import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineLocationMarker,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";
import { useLanguage } from "../hooks/context/Language/LanguageContext";

const academicFocus = [
  "Software Development",
  "Data Structures",
  "Databases",
  "Computer Systems",
  "Problem-Solving",
];

export default function Education() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section
      id="education"
      dir={language === "ar" ? "rtl" : "ltr"}
      className="mt-5 section-anchor"
      aria-labelledby="education-heading"
    >
      <div className="site-container education-shell">
        <header className="projects-header education-header">
          <span className="projects-eyebrow">
            <i aria-hidden="true" />
            {t("Academic Background")}
          </span>
          <h2  className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-center"
            style={{
              background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }} id="education-heading">{t("Education")}</h2>
          <p>
            {t(
              "My academic journey in Computer Engineering and the technical foundation that supports my work as a Full Stack Developer."
            )}
          </p>
        </header>

        <article 
        
        className="education-card" aria-labelledby="education-degree">
          <div className="education-icon" aria-hidden="true">
            <HiOutlineAcademicCap />
          </div>

          <div className="education-card-body">
            <div className="education-card-heading">
              <div>
                <h3 id="education-degree">
                  {t("Bachelor’s Degree in Computer Engineering")}
                </h3>
                <p className="education-institution">
                  <HiOutlineOfficeBuilding aria-hidden="true" />
                  <span>{t("Fırat University")}</span>
                </p>
                <p className="education-faculty">
                  <span>{t("Faculty of Engineering")}</span>
                  <span aria-hidden="true">·</span>
                  <span>{t("Computer Engineering")}</span>
                </p>
              </div>

              <div className="education-metadata">
                <span>
                  <HiOutlineCalendar aria-hidden="true" />
                  {t("2022 — 2026")}
                </span>
                <span className="education-status">
                  <HiOutlineCheckCircle aria-hidden="true" />
                  {t("Graduated")}
                </span>
                <span>
                  <HiOutlineLocationMarker aria-hidden="true" />
                  {t("Elazığ, Türkiye")}
                </span>
              </div>
            </div>

            <p className="education-description">
              {t(
                "Completed a Bachelor’s degree in Computer Engineering at the Faculty of Engineering, Fırat University. The program provided a strong foundation in software development, computer systems, databases, algorithms, and engineering problem-solving."
              )}
            </p>

            <div className="education-focus">
              <h4>{t("Academic Focus")}</h4>
              <ul>
                {academicFocus.map((focus) => (
                  <li key={focus}>{t(focus)}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
