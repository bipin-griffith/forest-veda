import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../styles/checkout.css";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [details, setDetails] = useState({ name: "", email: "", address: "", payment: "credit-card" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`Order placed successfully! Confirmation sent to ${details.email}`);
    localStorage.setItem("order", JSON.stringify({ cart, details }));
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" required value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} />
        <input type="email" placeholder="Email" required value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} />
        <input type="text" placeholder="Shipping Address" required value={details.address} onChange={(e) => setDetails({ ...details, address: e.target.value })} />

        <select value={details.payment} onChange={(e) => setDetails({ ...details, payment: e.target.value })}>
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
          <option value="paypal">PayPal</option>
          <option value="upi">UPI</option>
        </select>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default Checkout;
