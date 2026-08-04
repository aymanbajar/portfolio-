import { useTranslation } from "react-i18next";
import type { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiArrowRight, HiOutlineMail } from "react-icons/hi";
import { useLanguage } from "../hooks/context/Language/LanguageContext";

type ContactMethod = {
  href: string;
  icon: IconType;
  label: string;
  description: string;
  external?: boolean;
};

const EMAIL_ADDRESS = "eymenbacaryos@gmail.com";

const CONTACT_METHODS: ContactMethod[] = [
  {
    href: "https://github.com/aymanbajar",
    icon: FaGithub,
    label: "GitHub",
    description: "View my repositories",
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/eymenbacar/",
    icon: FaLinkedin,
    label: "LinkedIn",
    description: "Connect professionally",
    external: true,
  },
  {
    href: `mailto:${EMAIL_ADDRESS}`,
    icon: HiOutlineMail,
    label: "Email",
    description: "Send me a message",
  },
  {
    href: "https://x.com/AymanBajar",
    icon: FaXTwitter,
    label: "X",
    description: "Follow updates",
    external: true,
  },
  {
    href: "https://www.instagram.com/bajarayman/",
    icon: FaInstagram,
    label: "Instagram",
    description: "See visual posts",
    external: true,
  },
  {
    href: "https://www.facebook.com/ayman.bajar.93",
    icon: FaFacebook,
    label: "Facebook",
    description: "Contact me there",
    external: true,
  },
];

function ContactCard({ method }: { method: ContactMethod }) {
  const { t } = useTranslation();
  const Icon = method.icon;

  return (
    <li className="contact-method-item">
      <a
        className="contact-method-card"
        href={method.href}
        target={method.external ? "_blank" : undefined}
        rel={method.external ? "noopener noreferrer" : undefined}
        aria-label={`${t(method.description)} — ${t(method.label)}`}
      >
        <span className="contact-method-icon" aria-hidden="true">
          <Icon />
        </span>

        <span className="contact-method-copy">
          <strong>{t(method.label)}</strong>
          <small>{t(method.description)}</small>
        </span>

        <span className="contact-method-arrow" aria-hidden="true">
          <HiArrowRight />
        </span>
      </a>
    </li>
  );
}

export default function Contact() {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <section
      className="contact-section"
      dir={language === "ar" ? "rtl" : "ltr"}
      aria-labelledby="contact-title"
    >
      <div className="site-container contact-layout">
        <div className="contact-intro">
          <div className="contact-eyebrow">
            <span aria-hidden="true" />
            {t("Contact")}
          </div>

          <h2 id="contact-title">{t("Let's Build Something Great")}</h2>

          <p className="contact-description">
            {t(
              "I'm open to freelance work, remote opportunities, and meaningful collaborations. Feel free to reach out through the platforms below."
            )}
          </p>

          <div className="contact-status">
            <span className="contact-status-dot" aria-hidden="true" />
            {t("Available for Remote Work")}
          </div>

          <div className="contact-action-group">
            <a
              className="button button-primary contact-primary-action"
              href={`mailto:${EMAIL_ADDRESS}`}
              aria-label={`${t("Send an Email")} — ${EMAIL_ADDRESS}`}
            >
              <HiOutlineMail aria-hidden="true" />
              {t("Send an Email")}
              <HiArrowRight className="contact-action-arrow" aria-hidden="true" />
            </a>
            <p>{t("I usually respond as soon as possible.")}</p>
          </div>
        </div>

        <div className="contact-methods" aria-label={t("Contact methods")}>
          <div className="contact-methods-heading">
            <p>{t("Choose the channel that works best for you.")}</p>
            <span>{CONTACT_METHODS.length.toString().padStart(2, "0")}</span>
          </div>

          <ul className="contact-methods-grid">
            {CONTACT_METHODS.map((method) => (
              <ContactCard key={method.label} method={method} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
