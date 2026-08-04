import adminDoctor from "../assets/imagesProjects/admin-doctor.webp";
import doctor from "../assets/imagesProjects/doctor.webp";
import hotel from "../assets/imagesProjects/hotel.webp";
import kapser from "../assets/imagesProjects/kapser.webp";
import leon from "../assets/imagesProjects/leon.webp";
import movies from "../assets/imagesProjects/movies.webp";
import travel from "../assets/imagesProjects/travel.webp";
import {
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import type { IconType } from "react-icons";

export interface TechItem {
  icon: IconType;
  label: string;
  color: string;
}

export type ProjectCategory = "Full Stack" | "Frontend";

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  category: ProjectCategory;
  role: "Full Stack Developer" | "Frontend Developer";
  imageUrl?: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
  technologies: TechItem[];
  features: string[];
  liveUrl?: string;
  repositoryUrl?: string;
  featured?: boolean;
  problem?: string;
  solution?: string;
  responsibilities?: string[];
}

export const TECH = {
  react: { icon: SiReact, label: "React", color: "#61dafb" },
  tailwind: { icon: SiTailwindcss, label: "Tailwind CSS", color: "#38bdf8" },
  mongodb: { icon: SiMongodb, label: "MongoDB", color: "#47a248" },
  express: { icon: SiExpress, label: "Express", color: "#d1d5db" },
  nodejs: { icon: SiNodedotjs, label: "Node.js", color: "#5fa04e" },
  socketio: { icon: SiSocketdotio, label: "Socket.IO", color: "#e5e7eb" },
  javascript: { icon: SiJavascript, label: "JavaScript", color: "#f7df1e" },
  typescript: { icon: SiTypescript, label: "TypeScript", color: "#3178c6" },
  html: { icon: SiHtml5, label: "HTML5", color: "#e34f26" },
  css: { icon: SiCss3, label: "CSS3", color: "#1572b6" },
} satisfies Record<string, TechItem>;

export const dataProjects: ProjectData[] = [
  {
    id: "medical-appointment-platform",
    slug: "medical-appointment-platform",
    title: "Medical Appointment Booking Platform",
    shortDescription:
      "A full-stack medical appointment platform with separate experiences for patients, doctors, and administrators.",
    category: "Full Stack",
    role: "Full Stack Developer",
    imageUrl: doctor,
    imageAlt:
      "Patient interface showing doctors in the medical appointment booking platform",
    imageWidth: 984,
    imageHeight: 370,
    technologies: [
      TECH.react,
      TECH.tailwind,
      TECH.nodejs,
      TECH.express,
      TECH.mongodb,
    ],
    features: [
      "Doctor discovery and specialty filtering",
      "Appointment booking and status management",
      "Patient, doctor, and administrator authentication",
      "Medical records and prescriptions",
      "Dedicated doctor and administrator dashboards",
    ],
    liveUrl: "https://dector-app-booking-system.vercel.app/",
    repositoryUrl: "https://github.com/aymanbajar/DectorAppBookingSystem",
    featured: true,
    problem:
      "Patients need a clear way to find doctors and manage appointments, while doctors and administrators need role-specific workflows for clinical and operational tasks.",
    solution:
      "A MERN application with a patient-facing interface, a combined doctor and administrator dashboard, protected APIs, and separate authorization for each role.",
    responsibilities: [
      "Built the patient-facing React application and the doctor/administrator dashboard.",
      "Developed Express routes, controllers, and MongoDB models for appointments, users, doctors, records, and prescriptions.",
      "Implemented protected patient, doctor, and administrator workflows with JWT-based authentication.",
    ],
  },
  {
    id: "hotel-management-platform",
    slug: "hotel-management-platform",
    title: "Havana Grand Hotel Management System",
    shortDescription:
      "A full-stack hotel operations platform for guests, receptionists, housekeeping staff, and administrators.",
    category: "Full Stack",
    role: "Full Stack Developer",
    imageUrl: hotel,
    imageAlt:
      "Room booking interface from the Havana Grand hotel management system",
    imageWidth: 1353,
    imageHeight: 622,
    technologies: [
      TECH.react,
      TECH.typescript,
      TECH.nodejs,
      TECH.express,
      TECH.mongodb,
      TECH.socketio,
    ],
    features: [
      "Role-based guest and staff access",
      "Room and reservation management",
      "Receptionist walk-in booking",
      "Housekeeping and maintenance service requests",
      "Real-time staff and guest chat",
    ],
    liveUrl: "https://hotel-management-system-five-fawn.vercel.app/",
    repositoryUrl: "https://github.com/aymanbajar/hotel-management-system",
    featured: true,
    problem:
      "Hotel teams need to coordinate rooms, reservations, guest requests, and staff responsibilities across several operational roles.",
    solution:
      "A TypeScript MERN platform that connects guest booking with dedicated reception, housekeeping, and administrator dashboards, plus real-time communication.",
    responsibilities: [
      "Built typed React interfaces for guests, receptionists, housekeeping staff, and administrators.",
      "Developed Express APIs and MongoDB models for rooms, reservations, users, notifications, and service requests.",
      "Implemented protected role workflows and real-time chat using Socket.IO.",
    ],
  },
  {
    id: "mern-ecommerce-platform",
    slug: "mern-ecommerce-platform",
    title: "Full Stack E-commerce Platform",
    shortDescription:
      "A TypeScript MERN storefront that supports product discovery, cart management, protected user flows, and order administration.",
    category: "Full Stack",
    role: "Full Stack Developer",
    imageAlt: "Neutral preview for the full-stack e-commerce platform",
    technologies: [
      TECH.react,
      TECH.typescript,
      TECH.tailwind,
      TECH.nodejs,
      TECH.express,
      TECH.mongodb,
    ],
    features: [
      "JWT authentication and protected routes",
      "Product browsing, search, and filtering",
      "Shopping cart and wishlist management",
      "Checkout and order history",
      "Administrator product, order, user, and coupon tools",
    ],
    liveUrl: "https://mernstack-ecommerce-liard.vercel.app/",
    repositoryUrl: "https://github.com/aymanbajar/mernstack-ecommerce",
    featured: true,
    problem:
      "A complete storefront must connect product discovery and cart state with secure user accounts, checkout, order tracking, and administrator controls.",
    solution:
      "A typed React storefront backed by Express and MongoDB APIs, with protected customer routes and a separate administration experience.",
    responsibilities: [
      "Built the storefront and administration interfaces with React and TypeScript.",
      "Developed backend routes and MongoDB models for users, products, carts, orders, and coupons.",
      "Implemented authenticated customer flows, protected routes, and client-side cart state.",
    ],
  },
  {
    id: "medical-admin-dashboard",
    slug: "medical-admin-dashboard",
    title: "Medical Admin & Doctor Dashboard",
    shortDescription:
      "The operational dashboard for the medical platform, giving doctors and administrators dedicated tools for appointments, patients, and clinical records.",
    category: "Full Stack",
    role: "Full Stack Developer",
    imageUrl: adminDoctor,
    imageAlt:
      "Administrator dashboard from the medical appointment booking platform",
    imageWidth: 579,
    imageHeight: 536,
    technologies: [
      TECH.react,
      TECH.tailwind,
      TECH.nodejs,
      TECH.express,
      TECH.mongodb,
    ],
    features: [
      "Doctor and administrator dashboards",
      "Appointment and patient management",
      "Medical records and prescription workflows",
    ],
    liveUrl: "https://dector-app-booking-system-alor.vercel.app/",
    repositoryUrl: "https://github.com/aymanbajar/DectorAppBookingSystem",
  },
  {
    id: "travel-landing-page",
    slug: "travel-landing-page",
    title: "Travel Booking Landing Page",
    shortDescription:
      "A responsive travel interface for exploring destinations, packages, services, and booking information.",
    category: "Frontend",
    role: "Frontend Developer",
    imageUrl: travel,
    imageAlt: "Travel landing page with destination and package sections",
    imageWidth: 954,
    imageHeight: 440,
    technologies: [TECH.html, TECH.css, TECH.javascript],
    features: [
      "Destination and package presentation",
      "Travel service and gallery sections",
      "Responsive booking-oriented layout",
    ],
    liveUrl: "https://aymanbajar.github.io/Travel/",
    repositoryUrl: "https://github.com/aymanbajar/Travel",
  },
  {
    id: "movies-interface",
    slug: "movies-interface",
    title: "Movies Discovery Interface",
    shortDescription:
      "An interactive movie browsing page with a featured carousel, searchable results, and a personal watchlist interface.",
    category: "Frontend",
    role: "Frontend Developer",
    imageUrl: movies,
    imageAlt: "Movie discovery interface with featured film artwork",
    imageWidth: 675,
    imageHeight: 583,
    technologies: [TECH.html, TECH.css, TECH.javascript],
    features: [
      "Featured movie carousel",
      "Search results interface",
      "Movie cards and watchlist presentation",
    ],
    liveUrl: "https://aymanbajar.github.io/Movies/",
    repositoryUrl: "https://github.com/aymanbajar/Movies",
  },
  {
    id: "leon-agency-template",
    slug: "leon-agency-template",
    title: "Leon Agency Website",
    shortDescription:
      "A responsive multi-section agency website focused on clear content structure and foundational HTML and CSS layout skills.",
    category: "Frontend",
    role: "Frontend Developer",
    imageUrl: leon,
    imageAlt: "Leon agency website landing page",
    imageWidth: 501,
    imageHeight: 344,
    technologies: [TECH.html, TECH.css],
    features: [
      "Responsive multi-section layout",
      "Services and portfolio presentation",
      "About and contact sections",
    ],
    liveUrl: "https://aymanbajar.github.io/html-and-css-project-one/",
    repositoryUrl: "https://github.com/aymanbajar/html-and-css-project-one",
  },
  {
    id: "kasper-creative-template",
    slug: "kasper-creative-template",
    title: "Kasper Creative Website",
    shortDescription:
      "A responsive creative-agency layout presenting services, portfolio work, team information, skills, and pricing.",
    category: "Frontend",
    role: "Frontend Developer",
    imageUrl: kapser,
    imageAlt: "Kasper creative agency website landing page",
    imageWidth: 601,
    imageHeight: 378,
    technologies: [TECH.html, TECH.css],
    features: [
      "Services and design presentation",
      "Portfolio and media sections",
      "About, skills, and pricing content",
    ],
    liveUrl: "https://aymanbajar.github.io/kasper/",
    repositoryUrl: "https://github.com/aymanbajar/kasper",
  },
];
