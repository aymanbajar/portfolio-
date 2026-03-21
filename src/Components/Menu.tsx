import { useTranslation } from "react-i18next";
import { useLanguage } from "../hooks/context/Language/LanguageContext";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Menu() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [active, setActive] = useState("home");
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) setVisible(true);
      else if (currentY > lastScrollY.current + 5) setVisible(false);
      else if (currentY < lastScrollY.current - 5) setVisible(true);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - navbarHeight, behavior: "smooth" });
    }
    setActive(id);
  };

  const links = [
    { id: "home",        label: t("Home") },
    { id: "about",       label: t("About") },
    { id: "my-projects", label: t("My projects") },
    { id: "contact",     label: t("Contact") },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0,  scale: 1     }}
          exit={{    opacity: 0, y: -16, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className="relative"
        >
          {/* Ambient glow behind navbar */}
          <div
            className="absolute inset-0 -z-10 rounded-2xl blur-2xl opacity-30 scale-110"
            style={{
              background: "linear-gradient(to right, #38bdf8, #818cf8, #c084fc)",
            }}
          />

          {/* Glass pill container */}
          <ul
            dir={language === "ar" ? "rtl" : "ltr"}
            className={`
              relative flex items-center gap-1
              px-2 py-2 rounded-2xl
              border border-white/10
              backdrop-blur-2xl
              shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.15)]
              flex-col md:flex-row
              ${language === "ar" ? "font-Cairo" : "font-Cairo-Eng"}
            `}
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
            }}
          >
            {/* Top reflection shimmer */}
            <div className="absolute top-0 left-4 right-4 h-px rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            {links.map(({ id, label }) => (
              <li
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative cursor-pointer"
              >
                {/* Framer Motion shared layout active pill */}
                {active === id && (
                  <motion.span
                    layoutId="activePill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-xl"
                    style={{
                      background: "linear-gradient(135deg, #38bdf8, #818cf8, #c084fc)",
                      boxShadow: "0 0 16px rgba(129,140,248,0.55), 0 2px 8px rgba(56,189,248,0.3)",
                    }}
                  />
                )}

                {/* Hover ghost pill */}
                <motion.span
                  whileHover={active !== id ? { opacity: 1 } : {}}
                  initial={{ opacity: 0 }}
                  className="absolute inset-0 rounded-xl transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(135deg, rgba(56,189,248,0.1), rgba(192,132,252,0.1))",
                  }}
                />

                {/* Label */}
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  className={`
                    relative z-10 flex items-center gap-1.5
                    px-4 py-2 rounded-xl
                    text-[13px] md:text-sm font-semibold tracking-wide
                    transition-colors duration-300 select-none
                    ${active === id
                      ? "text-white drop-shadow-sm"
                      : "text-gray-400 hover:text-gray-100"
                    }
                  `}
                >
                  {label}

                  {/* Active dot pulse */}
                  {active === id && (
                    <span className="relative flex h-1.5 w-1.5">
                      <span
                        className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                        style={{ background: "#e0f2fe" }}
                      />
                      <span
                        className="relative inline-flex h-1.5 w-1.5 rounded-full"
                        style={{ background: "#bae6fd" }}
                      />
                    </span>
                  )}
                </motion.span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}