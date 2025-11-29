import React from "react";
import "./Contact.css";

export default function Contact() {
  const contactLinks = [
    {
      icon: "fab fa-instagram",
      text: "Instagram",
      url: "https://www.instagram.com/naturalmentevellya/",
      ariaLabel: "Visitar nuestro Instagram"
    },
    {
      icon: "fas fa-envelope",
      text: "Correo",
      url: "mailto:Vellyabylorena@gmail.com",
      ariaLabel: "Enviar un correo electrónico"
    },
    {
      icon: "fab fa-whatsapp",
      text: "WhatsApp",
      url: "https://wa.me/447801402674",
      ariaLabel: "Contactar por WhatsApp"
    },
      {
      icon: 'fab fa-tiktok',
      text: "TikTok",
      url: 'https://www.tiktok.com/@naturalmentevellya',
      ariaLabel: 'Contactar por tiktok'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-text-content">
          <h2 className="contact-message-title">¿Te gusta lo que ves?</h2>
          <h2 className="contact-message-title">¿Quieres darnos alguna opinión?</h2>
          <p className="contact-message">
            Si te interesa alguno de nuestros productos o tienes cualquier pregunta, 
            no dudes en contactar con nosotros, estaremos encantados de atenderte 
          </p>
          <span className="smiley" role="img" aria-label="Emoticono sonriente">😊</span>
        </div>

        <div className="phone-container">
          <div className="card">
            <div className="camera"></div>
            <div className="card-int">
              <div className="hello">
                <div className="welcome">
                  <h3>Contáctanos</h3>
                  <p>Estamos aquí para ti</p>
                </div>
                <div className="contact-info">
                  {contactLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="contact-link"
                      aria-label={link.ariaLabel}
                    >
                      <i className={link.icon}></i>
                      <span className="contact-text">{link.text}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="top">
              <div className="camera">
                <div className="int"></div>
              </div>
              <div className="speaker"></div>
            </div>
            
            <div className="btn1"></div>
            <div className="btn2"></div>
            <div className="btn3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}