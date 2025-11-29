import React from "react";
import "./Footer.css";
import {Link, useNavigate} from "react-router-dom";

export default function Footer({ scrollTo }) {
  const navigate = useNavigate();
  const handleScrollToHomeSection = (id) =>{
    navigate(`/#${id}`);
  }
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <p className="footer-description">
            Jabones artesanales elaborados con ingredientes naturales y de alta calidad.
          </p>
          <div className="footer-badges">
            {[
              ["fa-seedling", "100% Natural"],
              ["fa-otter", "Cruelty Free"],
              ["fa-hand", "Hecho a Mano"],
            ].map(([icon, text], i) => (
              <span key={i} className="badge">
                <i className={`fa-solid ${icon}`}></i> {text}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <div className="footer-links">
            <a href="tel:+447801402674" className="footer-link">
              <i className="fas fa-phone"></i> 07801402674
            </a>
            <a href="mailto:Vellyabylorena@gmail.com" className="footer-link">
              <i className="fas fa-envelope"></i> Vellyabylorena@gmail.com
            </a>
            <a
              href="https://www.google.com/maps/place/Londres,+Reino+Unido"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fas fa-map-marker-alt"></i> Londres, Reino Unido
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Navegación</h4>
          <div className="footer-links">
            {[
              ["Nuestros Jabones", "jabones"],
              ["¿Quienes somos?", "about-us"],
              ["Catálogo", "catalogo"],
            ].map(([txt, id], i) => (
              <button key={i} className="footer-link footer-button" onClick={() => handleScrollToHomeSection(id)}>
                {txt}
              </button>
            ))}
            <Link to="/faq" className="footer-link link-faq">
            <i className="fas fa-question-circle"></i>
             Preguntas Frecuentes
            </Link>
          </div>
        </div>

        <div className="footer-section footer-image">
          <p className="footer-hours">Horario de atención: Lun - Vie: 9:00 - 18:00</p>
          <img src="/images/icons/natural-icon.webp" alt="100% natural" className="logo-image" />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Naturalmente Vellya.</p>
      </div>
    </footer>
  );
}