import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/context/Language/LanguageContext";
import { useTheme } from "../hooks/context/Theme/ThemeContext";

export default function Footer() {
    const { t } = useTranslation();
    const { language } = useLanguage();
    const { theme } = useTheme();
    
  return (
    <footer className={`w-full py-4 text-center ${theme === "light" ? "bg-slate-50 text-gray-600" : "bg-[#080c14] text-gray-300"} border-t ${theme === "light" ? "border-gray-200" : "border-white/[0.06]"}`}>
      <p
      dir={language === "ar" ? "rtl" : "ltr"}
      className="text-sm">&copy; {new Date().getFullYear()} {t('developed by Ayman Bajar. All rights reserved.')}</p>
    </footer>
  );
}