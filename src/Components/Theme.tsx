import { useTranslation } from "react-i18next";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "../hooks/context/Theme/ThemeContext";

export default function Theme() {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      type="button"
      className="icon-button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label={t(isLight ? "Switch to dark mode" : "Switch to light mode")}
      title={t(isLight ? "Switch to dark mode" : "Switch to light mode")}
    >
      {isLight ? (
        <HiOutlineMoon aria-hidden="true" />
      ) : (
        <HiOutlineSun aria-hidden="true" />
      )}
    </button>
  );
}
