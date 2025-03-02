import React, { useState } from "react";
import "../styles/subscription.css";

const Subscription = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    localStorage.setItem("subscription", JSON.stringify({ email }));
    alert("Subscribed successfully!");
    setEmail("");
  };

  return (
    <div className="subscription-container">
      <h3>Subscribe to Get 15% Off!</h3>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Subscription;
