import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom"; 
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import { isIOS } from "./utils/deviceDetection.js"; // IMPORTAR
import "./App.css";

const AppContent = ({ isScrolled, scrollTo }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const idToScroll = location.hash.substring(1);
      
      const timer = setTimeout(() => {
        scrollTo(idToScroll);
        navigate(location.pathname, { replace: true });
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [location, scrollTo, navigate]);

  return (
    <div className="App">
      <Header isScrolled={isScrolled} scrollTo={scrollTo} />
      
      <Routes>
        <Route path="/" element={<Home isScrolled={isScrolled} scrollTo={scrollTo} />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
      
      <Footer />
    </div>
  );
};

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // AGREGAR ESTE USEEFFECT
  useEffect(() => {
    if (isIOS()) {
      document.body.classList.add('is-ios');
    }
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = isScrolled ? 80 : 120;
      window.scrollTo({
        top: el.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <AppContent isScrolled={isScrolled} scrollTo={scrollTo} /> 
    </Router>
  );
}