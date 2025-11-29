import React from "react";
import "./About.css";

export default function About() {
  return (
    <section className="info" id="about-us">
      <div className="about-header">
        <h2 className="about-title">Un poco sobre nosotros</h2>
      </div>
      
      <div className="about-content">
        <div>
          <p>
            Somos un emprendimiento ubicado en Londres, Reino Unido. Nos dedicamos a la elaboración de jabones artesanales utilizando ingredientes naturales. Ofrecemos productos responsables con el cuerpo enfocados en el autocuidado gracias a fórmulas hechas con métodos tradicionales y personalizados.
          </p>
          <p>
            Cada jabón es preparado a mano, preservando los beneficios de cada ingrediente. Apostamos por fórmulas que hidratan, nutren y protegen, ideales para todo tipo de pieles y respetuosas con el medio ambiente. Trabajamos para compartir todos los beneficios que nos brindan los ingredientes naturales en su forma más pura.
          </p>
          <p>
            En esencia, somos una pequeña empresa familiar que valora y promueve la autenticidad, la calidad y la cercanía y te invitamos a descubrir nuestro concepto de higiene y bienestar a través de nuestros jabones artesanales. Sólo tienes que ponerte en contacto con nosotros para cualquier pedido o duda y seguirnos en nuestras redes sociales para saber más sobre nuestros productos.
          </p>
        </div>
        
        <div className="about-visual">
          <img 
            src='/images/background/homemade.webp'
            alt="Jabón artesanal en proceso" 
          />
        </div>
      </div>
    </section>
  );
}