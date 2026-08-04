import { useTranslation } from "react-i18next";

interface LogoProps {
  onNavigate?: () => void;
}

export default function Logo({ onNavigate }: LogoProps) {
  const { t } = useTranslation();

  return (
    <a className="brand" href="#home" onClick={onNavigate} aria-label={t("Home")}>
      <span className="brand-mark" aria-hidden="true">
        A
      </span>
      <span className="brand-copy">
        <strong>{t("AYMAN")}</strong>
        <small>{t("Full Stack Developer")}</small>
      </span>
    </a>
  );
}
