import { useState, useEffect } from "react";
import { LanguageContext } from "./LanguageContext";
import { useTranslation } from "react-i18next";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(localStorage.getItem("language") || i18n.language || "en");
    
    useEffect(() => {
        i18n.changeLanguage(language);
        localStorage.setItem("language", language);
        document.documentElement.lang = language;
    }, [language, i18n]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}
