import React, { useState, useEffect } from "react";
import "./ChristmasGallery.css";

export default function ChristmasGallery({ isOpen, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = Array.from({ length: 8 }, (_, i) => {
    try {
      return {
        src: require(`../../assets/products/christmasEspecial/item${i + 1}.webp`),
        alt: `Producto navideño ${i + 1}`
      };
    } catch (error) {
      return null;
    }
  }).filter(img => img !== null);

  useEffect(() => {
    
    if (!isOpen) {
        document.body.style.overflow = '';
        return; 
    }
    
    const socialBar = document.querySelector('.social-bar');

    document.body.style.overflow = 'hidden';
    
    if (socialBar) {
        socialBar.style.display = 'none';
    }
    
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);

    return () => {
        document.body.style.overflow = '';
        if (socialBar) {
            socialBar.style.display = ''; 
        }
        document.removeEventListener('keydown', handleKeyDown);
    };

  }, [isOpen, onClose]);

  if (!isOpen || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="christmas-gallery-overlay" onClick={onClose}>
      <div className="christmas-gallery-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose} aria-label="Cerrar catálogo">
          &times;
        </button>
        <div className="gallery-content">
          <div className="gallery-main-column">
            <div className="main-image-wrapper">
              <button className="nav-arrow nav-arrow-left" onClick={prevImage} aria-label="Imagen anterior">
                <span className="arrow-icon">◀</span>
              </button>
              <div className="main-image-container">
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="main-image"
                  loading="lazy"
                />
              </div>
              <button className="nav-arrow nav-arrow-right" onClick={nextImage} aria-label="Imagen siguiente">
                <span className="arrow-icon">▶</span>
              </button>
            </div>
          </div>
          <div className="gallery-thumbnails-panel">
            <h3 className="thumbnails-title">Más productos navideños</h3>
             <div className="thumbnails-grid">
    {images.map((image, index) => (
      <button
        key={index}
        className={`thumbnail-wrapper ${index === currentIndex ? "active" : ""}`}
        onClick={() => goToImage(index)}
      >
        <img src={image.src} alt={image.alt} />
      </button>
    ))}
  </div>
          </div>
        </div>
      </div>
    </div>
  );
}