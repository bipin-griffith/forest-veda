import React from "react";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Corporate Office Address</h3>
        <p>1005, Matrix, B/h, DivyBhaskar, Corporate Road, Prahladnagar, Ahmedabad</p>
        <p>PIN Code: 380015</p>
      </div>

      <div className="footer-section">
        <h3>Factory Address</h3>
        <p>Barvada, Gir - Somnath, Gujarat, India</p>
      </div>

      <div className="footer-section">
        <h3>Follow Us</h3>
        <p>Instagram | Facebook | Twitter | YouTube</p>
      </div>
    </footer>
  );
};

export default Footer;
