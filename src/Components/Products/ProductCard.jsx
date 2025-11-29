import React from "react";

export default function ProductCard({ product, openModal }) {
  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url('${product.image}')` }}
        onClick={() => openModal(product)}
      >
        <div className="product-overlay">
          <button className="quick-view">Vista Rápida</button>
        </div>
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="price">£{product.price}</p>
      </div>
    </div>
  );
}