import React from "react";
import "./Modal.css";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        <img src={product.detailImage} alt={product.name} className="modal-image" />
        <div className="modal-info">
          <h3>{product.name}</h3>
          <p className="modal-price">£{product.price}</p>
        </div>
      </div>
    </div>
  );
}