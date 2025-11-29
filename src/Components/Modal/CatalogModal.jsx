import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Modal.css";

export default function CatalogModal({ 
  product, 
  imageIndex, 
  onClose, 
  onNext, 
  onPrev, 
  onSelectImage 
}) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content catalog-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <div className="catalog-modal-image-container">
          <img 
            src={product.images[imageIndex]} 
            alt={product.name} 
            className="modal-image" 
          />
          {product.images.length > 1 && (
            <>
              <button 
                className="modal-nav-btn modal-nav-prev" 
                onClick={onPrev}
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={32} />
              </button>
              <button 
                className="modal-nav-btn modal-nav-next" 
                onClick={onNext}
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={32} />
              </button>
              <div className="modal-image-indicators">
                {product.images.map((_, idx) => (
                  <span 
                    key={idx} 
                    className={`indicator ${idx === imageIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectImage(idx);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <div className="modal-info">
          <h3>{product.name}</h3>
        </div>
      </div>
    </div>
  );
}