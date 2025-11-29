import React from "react";

export default function CatalogCard({ product, openModal }) {
  return (
    <div className="catalog-card" onClick={() => openModal(product)}>
      <h3 className="catalog-card-title">{product.name}</h3>
      <div className="catalog-card-image-container">
        <img 
          src={product.images[0]} 
          alt={product.name}
          className="catalog-card-image"
        />
        <div className="catalog-image-overlay">
          <span className="catalog-quick-view">Ver fotos</span>
        </div>
      </div>
    </div>
  );
}