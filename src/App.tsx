import "./i18n";
import Navbar from "./layout/Navbar";
import { LanguageProvider } from "./hooks/context/Language/LanguageProvider";
import { ThemeProvider } from "./hooks/context/Theme/ThemeProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./layout/Footer";
import MyProjects from "./pages/MyProjects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="app-shell">
          <Navbar />
          <main className="site-main">
            <Home />
            <About />
            <MyProjects />
            <Education />
            <section
              id="contact"
              className="section-anchor"
              aria-labelledby="contact-title"
            >
              <Contact />
            </section>
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;
