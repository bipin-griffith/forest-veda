import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import productsData from "../data/products.json";
import "../styles/home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="home-container"
    >
      {/* Animated Background */}
      <div className="animated-bg"></div>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Forest Veda</h1>
        <p>Discover the power of Ayurveda with our premium herbal supplements.</p>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to Forest Veda, where we honor the profound healing legacy of the Vedic tradition.
          We meticulously cultivate premium herbal superfood supplements designed to harmonize your mind, body, and spirit.
        </p>
        <h3>Our Unique Process: A Sacred Synthesis</h3>
        <p>
          Our herbs undergo a transformative process rooted in the Vedic tradition:
        </p>
        <ul>
          <li><strong>Cultivated Harmony:</strong> Herbs grown in natural ecosystems as per the Vedic texts.</li>
          <li><strong>Rasalingam Shivaling River Infusion:</strong> Sacred water infusion for spiritual resonance.</li>
          <li><strong>Vedic Purification:</strong> Techniques that enhance bioavailability and preserve vital energy.</li>
        </ul>
      </section>

      {/* Category Section */}
      <section className="categories">
        <h2>Shop by Categories</h2>
        <div className="category-grid">
          <Link to="/shop?category=Immunity">Immunity</Link>
          <Link to="/shop?category=Digestion">Digestion</Link>
          <Link to="/shop?category=Skin Care">Skin Care</Link>
          <Link to="/shop?category=Energy">Energy</Link>
        </div>
      </section>

      {/* Products Section */}
      <section className="shop-section">
        <h2>Our Products</h2>
        <div className="products-grid">
          {products.slice(0, 4).map((product) => (
            <motion.div
              key={product.id}
              className="product-card"
              whileHover={{ scale: 1.05 }}
            >
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <Link to={`/product/${product.id}`} className="view-btn">View Details</Link>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
