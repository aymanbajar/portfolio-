import "./i18n";
import Navbar from "./layout/Navbar";
import { LanguageProvider } from "./hooks/context/Language/LanguageProvider";
import { ThemeProvider } from "./hooks/context/Theme/ThemeProvider";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./layout/Footer";
import NetworkAnimation from "./Components/NetworkAnimation";
import MyProjects from "./pages/MyProjects";
import Contact from "./pages/Contact";
function App() {
  return (
    <div>
      <NetworkAnimation />
       <LanguageProvider>
        <ThemeProvider>
         <Navbar />
         
            <div id="home"><Home /></div>
            <div id="about"><About/></div>
            <div id="my-projects"><MyProjects/></div>
            <div id="contact"><Contact/></div>
        
        <Footer />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
