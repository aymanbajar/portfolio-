import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const NAV_ITEMS = [
  { id: "home", labelKey: "Home" },
  { id: "about", labelKey: "About" },
  { id: "my-projects", labelKey: "My Projects" },
  { id: "education", labelKey: "Education" },
  { id: "contact", labelKey: "Contact" },
];

interface MenuProps {
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
}

export default function Menu({
  onNavigate,
  variant = "desktop",
}: MenuProps) {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + Math.min(window.innerHeight * 0.35, 240);
      let current = "home";

      NAV_ITEMS.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });

      const atPageEnd =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;
      setActiveSection(atPageEnd ? "contact" : current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <ul className={`nav-list nav-list-${variant}`}>
      {NAV_ITEMS.map(({ id, labelKey }) => {
        const isActive = activeSection === id;

        return (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`nav-link ${isActive ? "is-active" : ""}`}
              aria-current={isActive ? "location" : undefined}
              onClick={() => {
                setActiveSection(id);
                onNavigate?.();
              }}
            >
              <span>{t(labelKey)}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
