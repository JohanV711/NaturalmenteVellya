import React from "react";
import ProductCard from "./ProductCard";
import "./Products.css";

export default function Products({ products, openModal }) {
  return (
    <section className="products" id="jabones">
      <div className="products-header">
        <h2 className="products-title">Descubre nuestros productos</h2>
        <div className="products-underline"></div>
      </div>
      
      <div className="product-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} openModal={openModal} />
        ))}
      </div>
    </section>
  );
}