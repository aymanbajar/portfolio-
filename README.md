# Ayman Bajar Portfolio

The official personal portfolio of Ayman Bajar, a Full Stack Developer and
Computer Engineering graduate from Fırat University in Türkiye. The site
showcases selected software projects, technical skills, education, and contact
information in a responsive, multilingual interface.

[View the live portfolio](https://portfolio-wheat-alpha-19.vercel.app/)

## Features

- Responsive single-page portfolio for desktop, tablet, and mobile devices
- Light and dark themes with persisted user preferences
- English, Turkish, and Arabic translations with right-to-left support
- Project cards with live demo and source-code links
- Skills, education, professional profiles, and downloadable CV sections
- Semantic HTML and accessible labels for navigation and interactive controls
- Canonical metadata, Open Graph tags, Twitter Card tags, and JSON-LD
- Search-engine crawl support through `robots.txt` and `sitemap.xml`

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- React i18next
- React Icons
- ESLint

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/aymanbajar/portfolio-.git
cd portfolio-
npm install
```

### Development

```bash
npm run dev
```

Vite will print the local development URL, which is normally
`http://localhost:5173/`.

No environment variables are required to run the portfolio locally.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and create a production build |
| `npm run lint` | Run ESLint across the project |
| `npm run preview` | Preview the production build locally |

## Project Structure

```text
.
|-- public/
|   |-- locales/              # English, Turkish, and Arabic translations
|   |-- myPhoto.jpg           # Portfolio portrait
|   |-- cv.pdf                # Downloadable CV
|   |-- robots.txt            # Search-engine crawl directives
|   `-- sitemap.xml           # Canonical portfolio URL
|-- src/
|   |-- assets/               # Project images and static assets
|   |-- Components/           # Reusable interface components
|   |-- hooks/context/        # Theme and language state
|   |-- layout/               # Navbar and footer
|   |-- pages/                # Main portfolio sections
|   |-- utils/                # Project data and shared utilities
|   |-- App.tsx               # Application composition
|   |-- i18n.ts               # Internationalization setup
|   |-- index.css             # Global and component styles
|   `-- main.tsx              # React entry point
|-- index.html                # Metadata and structured data
|-- package.json
`-- vite.config.ts
```

## SEO Configuration

The canonical URL and social metadata are defined in `index.html`. Search-engine
directives are stored in `public/robots.txt`, while the public URL is listed in
`public/sitemap.xml`.

Update all three files if the production domain changes.

## Production Build

```bash
npm run build
```

The deployable output is generated in `dist/`. The current production site is
hosted on Vercel.

## Author

**Ayman Bajar**

- [GitHub](https://github.com/aymanbajar)
- [LinkedIn](https://www.linkedin.com/in/eymenbacar/)
- [Portfolio](https://portfolio-wheat-alpha-19.vercel.app/)

## License

This project is licensed under the ISC License.
