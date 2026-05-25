import leon    from '../assets/imagesProjects/leon.png';
import movies  from '../assets/imagesProjects/movies.png';
import kapser  from '../assets/imagesProjects/kapser.png';
import travel  from '../assets/imagesProjects/travel.png';
import doctor  from '../assets/imagesProjects/doctor.png';
import hotel   from '../assets/imagesProjects/hotel.png';

import {
  SiHtml5, SiCss3, SiJavascript, SiTypescript,
  SiReact, SiNodedotjs, SiExpress, SiMongodb,
  SiTailwindcss,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

// ─── Tech metadata ────────────────────────────────────────────────────────────
// Each icon is paired with its official brand color so cards can show
// colored glows on hover without a separate lookup table in the UI layer.
export interface TechItem {
  icon:  IconType;
  label: string;
  color: string; // brand hex — used for hover glow
}

export const TECH: Record<string, TechItem> = {
  react:      { icon: SiReact,       label: 'React',       color: '#61DAFB' },
  tailwind:   { icon: SiTailwindcss, label: 'Tailwind',    color: '#06B6D4' },
  mongodb:    { icon: SiMongodb,     label: 'MongoDB',     color: '#47A248' },
  express:    { icon: SiExpress,     label: 'Express',     color: '#ffffff' },
  nodejs:     { icon: SiNodedotjs,   label: 'Node.js',     color: '#339933' },
  javascript: { icon: SiJavascript,  label: 'JavaScript',  color: '#F7DF1E' },
  typescript: { icon: SiTypescript,  label: 'TypeScript',  color: '#3178C6' },
  html:       { icon: SiHtml5,       label: 'HTML5',       color: '#E34F26' },
  css:        { icon: SiCss3,        label: 'CSS3',        color: '#1572B6' },
};

// ─── Project data ─────────────────────────────────────────────────────────────
export interface ProjectData {
  id:          number;
  title:       string;
  description: string;
  link:        string;
  imageUrl:    string;
  githubUrl:   string;
  toolsUsed:   TechItem[];
}

export const dataProjects: ProjectData[] = [
  {
    id: 1,
    title: 'Hotel  managment and Appointment Booking system',
    description:
      'A full-stack hotel management and appointment booking system.',
    link:      'https://hotel-management-system-five-fawn.vercel.app/',
    imageUrl:  'hotel',
    githubUrl: 'https://github.com/aymanbajar/hotel-management-system',
    toolsUsed: [
      TECH.react, TECH.tailwind, TECH.mongodb,
      TECH.express, TECH.nodejs, TECH.javascript,
    ],
  },
  {
    id: 2,
    title: 'Doctor Appointment Booking',
    description:
      'A full-stack booking system where patients schedule appointments with doctors, view available slots, and receive notifications. Built with the MERN stack and a clean Tailwind UI.',
    link:      'https://dector-app-booking-system-z5fe.vercel.app/',
    imageUrl:  doctor,
    githubUrl: 'https://github.com/aymanbajar/DectorAppBookingSystem?tab=readme-ov-file',
    toolsUsed: [
      TECH.react, TECH.tailwind, TECH.mongodb,
      TECH.express, TECH.nodejs, TECH.javascript,
    ],
  },
  {
    id: 3,
    title: 'E-Commerce MERN Stack',
    description:
      'A comprehensive e-commerce app with user authentication, product listings, shopping cart, and order management — fully responsive with a TypeScript + React frontend.',
    link:      '',
    imageUrl:  '',
    githubUrl: 'https://github.com/aymanbajar/mernstack-ecommerce',
    toolsUsed: [
      TECH.react, TECH.tailwind, TECH.mongodb,
      TECH.express, TECH.nodejs, TECH.typescript,
    ],
  },
  {
    id: 5,
    title: 'Travel',
    description:
      'A travel website showcasing destinations, accommodations, and tips with visually appealing imagery and smooth navigation to help users plan trips effectively.',
    link:      'https://aymanbajar.github.io/Travel/',
    imageUrl:  travel,
    githubUrl: 'https://github.com/aymanbajar/Travel',
    toolsUsed: [TECH.html, TECH.css, TECH.javascript],
  },
  {
    id: 6,
    title: 'Movies',
    description:
      'An interactive movie display page featuring a Swiper carousel and a card gallery with clickable images linking to their respective streaming pages.',
    link:      'https://aymanbajar.github.io/Movies/',
    imageUrl:  movies,
    githubUrl: 'https://github.com/aymanbajar/Movies',
    toolsUsed: [TECH.html, TECH.css, TECH.javascript],
  },
  {
    id: 7,
    title: 'Leon — First Project',
    description:
      'My first HTML & CSS project — a fully responsive multi-section website for a fictional agency "Leon", covering Home, About, Services, and Contact with a clean, modern aesthetic.',
    link:      'https://aymanbajar.github.io/html-and-css-project-one/',
    imageUrl:  leon,
    githubUrl: 'https://github.com/aymanbajar/html-and-css-project-one',
    toolsUsed: [TECH.html, TECH.css],
  },
  {
    id: 8,
    title: 'Kasper',
    description:
      'A responsive landing page for Kasper antivirus software built with pure HTML & CSS. Focused on showcasing features through visually appealing layouts and interactive elements.',
    link:      'https://aymanbajar.github.io/kasper/',
    imageUrl:  kapser,
    githubUrl: 'https://github.com/aymanbajar/kasper',
    toolsUsed: [TECH.html, TECH.css],
  },
];
