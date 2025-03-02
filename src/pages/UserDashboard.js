import React, { useState, useEffect } from "react";
import "../styles/userDashboard.css";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
    
    const savedOrder = JSON.parse(localStorage.getItem("order"));
    if (savedOrder) {
      setOrders([savedOrder]);
    }
  }, []);

  return (
    <div className="dashboard-container">
      <h2>User Dashboard</h2>
      {user ? (
        <div>
          <h3>Welcome, {user.email}</h3>
          <h4>Order History</h4>
          {orders.length > 0 ? (
            orders.map((order, index) => (
              <div key={index} className="order-item">
                <p><strong>Name:</strong> {order.details.name}</p>
                <p><strong>Address:</strong> {order.details.address}</p>
                <h4>Items Ordered</h4>
                {order.cart.map((item, idx) => (
                  <div key={idx} className="order-product">
                    <img src={item.image} alt={item.name} className="order-image" />
                    <p>{item.name} - ₹{item.price} (x{item.quantity})</p>
                  </div>
                ))}
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      ) : (
        <p>Please log in to access your dashboard.</p>
      )}
    </div>
  );
};

export default UserDashboard;
