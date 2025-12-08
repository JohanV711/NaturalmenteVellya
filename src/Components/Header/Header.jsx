import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ChristmasGallery from "../ChristmasGallery/ChristmasGallery.jsx";
import "./Header.css";

export default function Header({ scrollTo }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleNavigation = (sectionId) => {
    if (isHome) {
      scrollTo(sectionId);
    } else {
      navigate("/");
      setTimeout(() => scrollTo(sectionId), 100);
    }
  };

  return (
    <>
      <header className="header">
        <div className="christmas-decorations">
          <img src="/images/christmas/snowflake1.webp" alt="" className="snowflake snowflake-1" />
          <img src="/images/christmas/snowflake1.webp" alt="" className="snowflake snowflake-1-2" />
          <img src="/images/christmas/snowflake2.webp" alt="" className="snowflake snowflake-2" />
          <img src="/images/christmas/snowflake2.webp" alt="" className="snowflake snowflake-2-1" />
          <img src="/images/christmas/snowflake3.webp" alt="" className="snowflake snowflake-3" />
        </div>

        <nav className="navbar">
          <div className="logo">
            <a href="tel:447801402674" className="telefono-contacto">
              07801402674
            </a>
            <img 
              src="/images/logo.webp" 
              alt="Naturalmente Vellya" 
              className="logo-image"
              onClick={() => navigate("/")}
            />
            <p className="tagline">Jabones naturales</p>
          </div>

          <div className="nav-center">
            {[
              { text: "Jabones", section: "jabones" },
              { text: "¿Quiénes somos?", section: "about-us" },
              { text: "Catálogo", section: "catalogo" },
            ].map((item, i) => (
              <button
                key={i}
                className="nav-btn"
                onClick={() => handleNavigation(item.section)}
              >
                {item.text}
              </button>
            ))}
            
            <Link to="/faq" className="nav-btn">
              Preguntas Frecuentes
            </Link>
          </div>

          <div className="nav-right">
            <button 
              className="btn-nav-right" 
              onClick={() => handleNavigation("contact")}
            >
              Contáctanos
            </button>
          </div>
        </nav>

        {isHome && (
          <section className="hero">
            <div className="hero-content">
              <div className="text-hero-content">
                <h1 className="hero-title">
                  Cuidado y Artesanía
                  <span className="christmas-subtitle"> Especial Navidad </span>
                </h1>
                
                <div className="hero-description">
                  <p className="hero-intro">
                    Descubre la pureza de nuestros jabones artesanales, 
                    elaborados con ingredientes 100% naturales.
                  </p>
                  <p>
                    <strong className="personzalized">¡Personalizado!</strong> Pide según tus necesidades o elige entre nuestros artículos disponibles.
                  </p>
                </div>
                
                <div className="text-hero-offer christmas-offer">
                  <div className="christmas-badge">
                    OFERTAS NAVIDEÑAS 
                  </div>
                  
                  <div className="offer-item">
                    <div className="offer-text">
                      <strong>2x1</strong> en todos los productos
                    </div>
                  </div>

                  <div className="offer-item">
                    <div className="offer-text">
                      Contáctanos y descubre más ofertas exclusivas.
                    </div>
                  </div>

                  <div 
                    className="offer-item clickable-offer-item"
                    onClick={() => setIsGalleryOpen(true)}
                  >
                    <div className="offer-text">
                      <strong>Catálogo de Productos Navideños</strong>
                      <span className="click-hint">Haz clic para ver</span>
                    </div>
                  </div>
                </div>
                
                <div className="hero-cta-section">
                  <span className="arrow-icon">
                    <i className="fa-solid fa-arrow-down"></i>
                  </span>
                  <button className="btn-explore christmas-btn" onClick={() => scrollTo("jabones")}>
                    Descubre nuestros productos
                  </button>
                </div>
              </div>
              
              <div className="hero-image">
                <img src='/images/background/soap.webp' alt="Jabón artesanal natural" />
                <img src="/images/christmas/gifts.webp" alt="" className="gifts-decoration" />
              </div>
            </div>
          </section>
        )}
      </header>

      <ChristmasGallery 
        isOpen={isGalleryOpen} 
        onClose={() => setIsGalleryOpen(false)} 
      />
    </>
  );
}