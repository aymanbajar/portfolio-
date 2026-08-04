import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { HiCheck, HiChevronDown } from "react-icons/hi";
import { useLanguage } from "../hooks/context/Language/LanguageContext";

const languages = [
  { value: "ar", labelKey: "Arabic", short: "AR" },
  { value: "en", labelKey: "English", short: "EN" },
  { value: "tr", labelKey: "Turkish", short: "TR" },
];

interface LanguageMenuProps {
  placement?: "top" | "bottom";
}

export default function LanguageMenu({
  placement = "bottom",
}: LanguageMenuProps) {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuId = useId();
  const current = languages.find((item) => item.value === language) ?? languages[1];

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div ref={containerRef} className="language-menu">
      <button
        type="button"
        className="language-trigger"
        onClick={() => setOpen((previous) => !previous)}
        aria-label={t("Change language")}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
      >
        <span>{current.short}</span>
        <HiChevronDown
          className={open ? "is-open" : ""}
          aria-hidden="true"
        />
      </button>

      <div
        id={menuId}
        className={`language-popover language-popover-${placement} ${
          open ? "is-open" : ""
        }`}
        role="menu"
        aria-hidden={!open}
      >
        {languages.map(({ value, labelKey, short }) => {
          const isActive = language === value;

          return (
            <button
              type="button"
              key={value}
              className={isActive ? "is-active" : ""}
              role="menuitemradio"
              aria-checked={isActive}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                setLanguage(value);
                setOpen(false);
              }}
            >
              <span className="language-short">{short}</span>
              <span>{t(labelKey)}</span>
              {isActive && <HiCheck aria-hidden="true" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
