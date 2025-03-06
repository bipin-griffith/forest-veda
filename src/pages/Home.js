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
    <motion.div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <motion.h1 initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          Welcome to Forest Veda
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          Experience the transformative power of Ayurveda with our 100% natural & herbal products.
        </motion.p>
        <motion.button whileHover={{ scale: 1.1 }} className="shop-now-btn">
          <Link to="/shop">Shop Now</Link>
        </motion.button>
      </section>

      {/* Our Story Section */}
      <section className="about-us">
        <h2>Our Story</h2>
        <p>
          Founded on the ancient wisdom of Ayurveda, Forest Veda is dedicated to bringing you natural, pure, and potent herbal remedies.
          Our journey began with a passion for holistic healing and a commitment to sustainability. We blend tradition with modern science to
          create products that nurture the mind, body, and spirit.
        </p>
      </section>

      {/* Our Philosophy Section */}
      <section className="philosophy">
        <h2>Our Philosophy</h2>
        <div className="philosophy-content">
          <motion.div className="philosophy-card" whileHover={{ scale: 1.05 }}>
            <h3>Holistic Healing</h3>
            <p>Embracing the balance of body, mind, and spirit through natural remedies.</p>
          </motion.div>
          <motion.div className="philosophy-card" whileHover={{ scale: 1.05 }}>
            <h3>Sustainability</h3>
            <p>Committed to eco-friendly practices that honor the earth.</p>
          </motion.div>
          <motion.div className="philosophy-card" whileHover={{ scale: 1.05 }}>
            <h3>Innovation</h3>
            <p>Merging ancient wisdom with modern research to create effective products.</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {products.slice(0, 6).map((product) => (
            <motion.div key={product.id} className="product-card" whileHover={{ scale: 1.05 }}>
              <img src={product.image} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p>₹{product.price}</p>
              <Link to={`/product/${product.id}`} className="view-btn">
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
        <Link to="/shop" className="see-all-btn">See All Products</Link>
      </section>

      {/* Benefits of Ayurveda Section */}
      <section className="benefits">
        <h2>The Benefits of Ayurveda</h2>
        <div className="benefits-grid">
          <motion.div className="benefit-card" whileHover={{ scale: 1.05 }}>
            <img src="/assets/natural-icon.svg" alt="Natural Ingredients" />
            <h3>Natural Ingredients</h3>
            <p>Our products are made with 100% natural and organic herbs.</p>
          </motion.div>
          <motion.div className="benefit-card" whileHover={{ scale: 1.05 }}>
            <img src="/assets/balance-icon.svg" alt="Balance & Harmony" />
            <h3>Balance & Harmony</h3>
            <p>Promoting a balanced lifestyle through holistic healing.</p>
          </motion.div>
          <motion.div className="benefit-card" whileHover={{ scale: 1.05 }}>
            <img src="/assets/energy-icon.svg" alt="Boost Energy" />
            <h3>Boost Energy</h3>
            <p>Enhance your vitality and well-being naturally.</p>
          </motion.div>
        </div>
      </section>

      {/* Workshops & Events Section */}
      <section className="workshops">
        <h2>Workshops & Events</h2>
        <div className="workshops-grid">
          <motion.div className="workshop-card" whileHover={{ scale: 1.05 }}>
            <h3>Ayurvedic Lifestyle Workshop</h3>
            <p>Learn how to integrate Ayurveda into your daily routine.</p>
            <Link to="/events" className="event-btn">Learn More</Link>
          </motion.div>
          <motion.div className="workshop-card" whileHover={{ scale: 1.05 }}>
            <h3>Herbal Medicine Seminar</h3>
            <p>Discover the secrets behind our herbal formulations.</p>
            <Link to="/events" className="event-btn">Learn More</Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          <motion.div className="testimonial-card" whileHover={{ scale: 1.05 }}>
            <p>"Forest Veda's products have transformed my health. I feel more energetic and balanced."</p>
            <h4>– Priya S.</h4>
          </motion.div>
          <motion.div className="testimonial-card" whileHover={{ scale: 1.05 }}>
            <p>"A perfect blend of tradition and modern science. I trust their products for my family's health."</p>
            <h4>– Ravi K.</h4>
          </motion.div>
          <motion.div className="testimonial-card" whileHover={{ scale: 1.05 }}>
            <p>"I love the holistic approach they offer. Their products are a must-try!"</p>
            <h4>– Meera T.</h4>
          </motion.div>
        </div>
      </section>

      {/* Blog & Resources Section */}
      <section className="blog">
        <h2>Insights & Resources</h2>
        <div className="blog-grid">
          <motion.div className="blog-card" whileHover={{ scale: 1.05 }}>
            <h3>Ayurveda & Immunity</h3>
            <p>Discover how Ayurveda naturally boosts your immune system.</p>
            <Link to="/blog/ayurveda-immunity" className="read-more-btn">Read More</Link>
          </motion.div>
          <motion.div className="blog-card" whileHover={{ scale: 1.05 }}>
            <h3>Herbs for Digestive Health</h3>
            <p>Learn about the best herbs to improve digestion and gut health.</p>
            <Link to="/blog/digestive-health" className="read-more-btn">Read More</Link>
          </motion.div>
          <motion.div className="blog-card" whileHover={{ scale: 1.05 }}>
            <h3>Integrating Ayurveda into Modern Life</h3>
            <p>Practical tips for embracing Ayurvedic practices every day.</p>
            <Link to="/blog/modern-ayurveda" className="read-more-btn">Read More</Link>
          </motion.div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>Have any questions or need personalized advice? Reach out to us!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Forest Veda</h3>
          <p>
            Embrace the power of nature and let Ayurveda guide your journey to wellness.
          </p>
          <div className="social-links">
            <a href="#"><img src="/assets/facebook.svg" alt="Facebook" /></a>
            <a href="#"><img src="/assets/instagram.svg" alt="Instagram" /></a>
            <a href="#"><img src="/assets/twitter.svg" alt="Twitter" /></a>
          </div>
        </div>
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/events">Events</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Forest Veda. All rights reserved.</p>
        </div>
      </footer>
    </motion.div>
  );
};

export default Home;
