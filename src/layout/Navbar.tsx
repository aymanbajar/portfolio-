import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import LanguageMenu from "../Components/LanguageMenu";
import Logo from "../Components/Logo";
import Menu from "../Components/Menu";
import Theme from "../Components/Theme";
import { useLanguage } from "../hooks/context/Language/LanguageContext";

export default function Navbar() {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const focusTimer = window.setTimeout(() => {
      drawerRef.current
        ?.querySelector<HTMLElement>(focusableSelector)
        ?.focus();
    }, 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 920) setIsMenuOpen(false);
    };
    window.addEventListener("resize", closeOnDesktop);
    return () => window.removeEventListener("resize", closeOnDesktop);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const direction = language === "ar" ? "rtl" : "ltr";

  return (
    <>
      <header
        dir={direction}
        className={`site-header ${scrolled ? "is-scrolled" : ""}`}
      >
        <div className="site-container navbar-panel">
          <Logo onNavigate={closeMenu} />

          <nav className="desktop-navigation" aria-label={t("Main navigation")}>
            <Menu />
          </nav>

          <div className="navbar-actions">
            <LanguageMenu />
            <Theme />
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button mobile-menu-button"
            onClick={() => setIsMenuOpen(true)}
            aria-label={t("Open navigation menu")}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <HiOutlineMenuAlt3 aria-hidden="true" />
          </button>
        </div>
      </header>

      <button
        type="button"
        className={`nav-backdrop ${isMenuOpen ? "is-open" : ""}`}
        onClick={closeMenu}
        aria-label={t("Close navigation menu")}
        tabIndex={isMenuOpen ? 0 : -1}
      />

      <aside
        ref={drawerRef}
        id="mobile-navigation"
        dir={direction}
        className={`mobile-drawer ${isMenuOpen ? "is-open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label={t("Main navigation")}
        aria-hidden={!isMenuOpen}
      >
        <div className="mobile-drawer-header">
          <Logo onNavigate={closeMenu} />
          <button
            type="button"
            className="icon-button"
            onClick={closeMenu}
            aria-label={t("Close navigation menu")}
          >
            <HiX aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-navigation" aria-label={t("Main navigation")}>
          <Menu variant="mobile" onNavigate={closeMenu} />
        </nav>

        <div className="mobile-drawer-footer">
          <LanguageMenu placement="top" />
          <Theme />
        </div>
      </aside>
    </>
  );
}
