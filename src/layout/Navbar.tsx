import { useState, useEffect } from "react";
import { useTheme } from "../hooks/context/Theme/ThemeContext";
import { useLanguage } from "../hooks/context/Language/LanguageContext";
import Logo from "../Components/Logo";
import Menu from "../Components/Menu";
import LanguageMenu from "../Components/LanguageMenu";
import Theme from "../Components/Theme";
import { CiMenuBurger } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const { theme } = useTheme();
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shrink + blur navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isLight = theme === "light";

  return (
    <>
      {/* ── Main Navbar ── */}
      <header
        dir={language === "ar" ? "rtl" : "ltr"}
        className={`
          fixed top-0 left-0 right-0 z-40
          flex items-center justify-between
          transition-all duration-500 ease-in-out
          ${language === "ar" ? "font-Cairo" : "font-Cairo-Eng"}
          ${
            scrolled
              ? `px-4 py-3 mx-4 mt-3 
               ${
                 isLight
                   ? " border-gray-200/60 text-gray-700"
                   : " border-gray-700/50 text-gray-200"
               }`
              : `px-6 py-5
               ${
                 isLight
                   ? "bg-white/0 text-gray-700"
                   : "bg-gray-900/0 text-gray-200"
               }`
          }
        `}
      >
        {/* Logo */}
        <Logo />

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <Menu />
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageMenu />
          <Theme />
        </div>

        {/* Mobile Burger */}
        <button
          className={`
            md:hidden flex items-center justify-center
            w-10 h-10 rounded-xl transition-all duration-300
            ${
              isLight
                ? "bg-gray-100 hover:bg-gray-200 text-gray-700"
                : "bg-gray-800 hover:bg-gray-700 text-gray-200"
            }
          `}
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open menu"
        >
          <CiMenuBurger size={18} />
        </button>
      </header>

      {/* ── Mobile Drawer ── */}

      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`
          fixed inset-0 z-50 transition-all duration-400
          ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
          ${isLight ? "bg-black/20" : "bg-black/50"} backdrop-blur-sm
        `}
      />

      {/* Drawer panel */}
      <aside
        dir={language === "ar" ? "rtl" : "ltr"}
        className={`
          fixed top-0 z-50 h-full w-4/5 max-w-xs
          flex flex-col
          transition-transform duration-400 ease-in-out
          ${language === "ar" ? "left-0" : "right-0"}
          ${
            isMenuOpen
              ? "translate-x-0"
              : language === "ar"
                ? "-translate-x-full"
                : "translate-x-full"
          }
          ${
            isLight
              ? "bg-white/0 text-gray-800"
              : "bg-gray-900/90 text-gray-100"
          }
          backdrop-blur-2xl shadow-2xl
        `}
      >
        {/* Drawer header */}
        <div
          className={`
          flex items-center justify-between px-6 py-5
          border-b ${isLight ? "border-gray-100" : "border-gray-800"}
        `}
        >
          <Logo />
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`
              flex items-center justify-center w-9 h-9 rounded-xl
              transition-all duration-200
              ${
                isLight
                  ? "bg-gray-100 hover:bg-gray-200 text-gray-600"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300"
              }
            `}
            aria-label="Close menu"
          >
            <IoClose size={18} />
          </button>
        </div>

        {/* Drawer nav links */}
        <div className="flex-1 flex flex-col justify-center px-6">
          <Menu />
        </div>

        {/* Drawer footer */}
        <div
          className={`
  relative flex items-center justify-center gap-4 px-6 py-6
  border-t overflow-hidden
  ${isLight ? "border-white/20" : "border-white/10"}
`}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 -z-10 blur-2xl opacity-20 scale-110"
            style={{
              background:
                "linear-gradient(to right, #38bdf8, #818cf8, #c084fc)",
            }}
          />

          {/* Top reflection shimmer */}
          <div className="absolute top-0 left-6 right-6 h-px rounded-full bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          {/* Glass surface */}
          <div className="absolute inset-0 backdrop-blur-2xl -z-10" />

          <LanguageMenu />
          <Theme />
        </div>
      </aside>
    </>
  );
}
