import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Servicii from "./pages/servicii";
import AboutUs from "./pages/despre";
import { LanguageProvider } from "./context/LanguageContext";
import Contact from "./pages/contact";
import ImpressumPage from "./pages/impressum";
import CookiesPage from "./pages/cookies";
import AGBPage from "./pages/agb";
import DatenschutzPage from "./pages/datenschutz";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/confidentiality" element={<DatenschutzPage />} />
              <Route path="/services" element={<Servicii />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/legal-notice" element={<ImpressumPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/terms" element={<AGBPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
