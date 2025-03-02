import React, { useState, useEffect } from "react";
import "../styles/orderTracking.css";

const OrderTracking = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const savedOrder = JSON.parse(localStorage.getItem("order"));
    if (savedOrder) {
      setOrder(savedOrder);
    }
  }, []);

  return (
    <div className="order-tracking-container">
      <h2>Order Tracking</h2>
      {order ? (
        <div>
          <h3>Order Details</h3>
          <p><strong>Name:</strong> {order.details.name}</p>
          <p><strong>Email:</strong> {order.details.email}</p>
          <p><strong>Shipping Address:</strong> {order.details.address}</p>
          <p><strong>Payment Method:</strong> {order.details.payment}</p>
          <h3>Items Ordered</h3>
          {order.cart.map((item, index) => (
            <div key={index} className="order-item">
              <img src={item.image} alt={item.name} className="order-image" />
              <p>{item.name} - ₹{item.price} (x{item.quantity})</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No recent orders found.</p>
      )}
    </div>
  );
};

export default OrderTracking;
