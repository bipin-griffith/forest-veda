import React, { useState } from "react";
import "../styles/consultation.css";

const Consultation = () => {
  const [details, setDetails] = useState({ name: "", email: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment booked successfully!");
    setDetails({ name: "", email: "", phone: "" });
  };

  return (
    <div className="consultation-container">
      <h2>Book an Appointment with Vaidya</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={details.name} onChange={(e) => setDetails({ ...details, name: e.target.value })} required />
        <input type="email" placeholder="Email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} required />
        <input type="tel" placeholder="Phone" value={details.phone} onChange={(e) => setDetails({ ...details, phone: e.target.value })} required />
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default Consultation;
