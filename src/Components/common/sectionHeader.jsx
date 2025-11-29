import React from "react";
import "./sectionHeader.css";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <div className="decorative-line"></div>
      {subtitle && <p className="catalog-subtitle">{subtitle}</p>}
    </div>
  );
}