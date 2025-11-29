import React from "react";
import CatalogCard from "./CatalogCard";
import "./Catalog.css";

export default function Catalog({ catalogProducts, openModal }) {
  return (
    <section className="catalog" id="catalogo">
      <div className="catalog-logo-container">
        <img src="/images/icons/catalog-logo.webp" alt="Catálogo" className="catalog-logo" />
      </div>
      <div className="catalog-products-grid">
        {catalogProducts.map((product) => (
          <CatalogCard 
            key={product.id} 
            product={product} 
            openModal={openModal}
          />
        ))}
      </div>
    </section>
  );
}