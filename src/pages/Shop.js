import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import productsData from "../data/products.json";
import "../styles/shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <div className="shop-container">
      <h2>Shop Ayurvedic Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <Link to={`/product/${product.id}`} className="view-btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
