import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FAQ.css";

const FAQAnswer = ({ text, navigate }) => {
  const goToContact = () => {
    navigate("/#contact");
  };
  
  const parts = text.split(/(contacto)/i);

  return (
    <p style={{ whiteSpace: 'pre-line' }}>
      {parts.map((part, index) => 
        part.toLowerCase() === "contacto" ? (
          <button
            key={index}
            onClick={goToContact}
            className="faq-contact-link"
            aria-label="Ir a la sección de Contacto"
          >
            {part}
          </button>
        ) : part
      )}
    </p>
  );
};

const FAQItem = ({ faq, index, isOpen, onToggle, navigate }) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [faq.answer]);

  return (
    <div className={`faq-item ${isOpen ? "active" : ""}`}>
      <button
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <span className="faq-icon">{isOpen ? "−" : "+"}</span>
      </button>

      <div
        className="faq-answer"
        style={{ height: isOpen ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="faq-answer-content">
          {index === 0 ? (
            <FAQAnswer text={faq.answer} navigate={navigate} />
          ) : (
            <p style={{ whiteSpace: 'pre-line' }}>{faq.answer}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  const faqs = [
    {
      question: "¿Cómo puedo hacer mis pedidos?",
      answer:
        "Escríbenos a cualquiera de las redes sociales que tenemos en la sección de contacto y nosotros nos encargamos.",
    },
    {
      question: "¿Los productos son naturales?",
      answer: "Sí, todos nuestros productos son 100% naturales y artesanales.",
    },
    {
      question: "¿Los productos son personalizados?",
      answer:
        "Si, aparte de los productos del catálogo, puedes pedir jabones personalizados según tu gusto y necesidades.",
    },
    {
      question: "¿Qué ingredientes usais?",
      answer: "Elaboramos nuestros productos con aceites vegetales:\n\n• Aceite de almendra\n• Aceite de oliva\n• Aceite de coco\n\nMantecas:\n• Manteca de Karité\n• Manteca de cacao\n\nOtros ingredientes:\n• Arcillas\n• Esencias\n• Extractos naturales específicos \n\n Todos son ingredientes naturales."
    },
    {
      question: "¿Tenéis tienda física?",
      answer: "Por el momento no disponemos de establecimiento.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <button className="faq-back-btn" onClick={() => navigate("/")}>
          <i className="fa-brands fa-fort-awesome"></i> Volver al inicio
        </button>

        <h1 className="faq-title">Preguntas Frecuentes</h1>
        <p className="faq-subtitle">
          Resuelve tus dudas o ponte en contacto con nosotros
        </p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => toggleFAQ(index)}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}