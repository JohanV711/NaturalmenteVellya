import React, { useState, useEffect, useRef } from "react";
import Products from "../Components/Products/Products.jsx";
import About from "../Components/About/About.jsx";
import Catalog from "../Components/Catalog/Catalog.jsx";
import Contact from "../Components/Contact/Contact.jsx";
import SocialBar from "../Components/Socialbar/Socialbar.jsx";
import ProductModal from "../Components/Modal/ProductModal.jsx";
import CatalogModal from "../Components/Modal/CatalogModal.jsx";
import { products, catalogProducts } from "../data/productsData.js";

export default function Home({ isScrolled, scrollTo }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCatalogProduct, setSelectedCatalogProduct] = useState(null);
  const [catalogModalImageIndex, setCatalogModalImageIndex] = useState(0);
  const [showSocialBar, setShowSocialBar] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (contactRef.current) {
        const contactTop = contactRef.current.offsetTop;
        const windowBottom = window.scrollY + window.innerHeight;
        setShowSocialBar(isScrolled && windowBottom < contactTop + 100);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrolled]);

  const openCatalogModal = (product) => {
    setSelectedCatalogProduct(product);
    setCatalogModalImageIndex(0);
  };

  const closeCatalogModal = () => {
    setSelectedCatalogProduct(null);
    setCatalogModalImageIndex(0);
  };

  const nextModalImage = () => {
    if (selectedCatalogProduct) {
      setCatalogModalImageIndex((prev) => 
        (prev + 1) % selectedCatalogProduct.images.length
      );
    }
  };

  const prevModalImage = () => {
    if (selectedCatalogProduct) {
      setCatalogModalImageIndex((prev) => 
        prev === 0 ? selectedCatalogProduct.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <>
      <SocialBar isVisible={showSocialBar} />
      <Products products={products} openModal={setSelectedProduct} />
      <About />
      <Catalog catalogProducts={catalogProducts} openModal={openCatalogModal} />
      <div ref={contactRef}>
        <Contact />
      </div>
      
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
      
      <CatalogModal
        product={selectedCatalogProduct}
        imageIndex={catalogModalImageIndex}
        onClose={closeCatalogModal}
        onNext={nextModalImage}
        onPrev={prevModalImage}
        onSelectImage={setCatalogModalImageIndex}
      />
    </>
  );
}