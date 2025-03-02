import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartReducer";
import { Link } from "react-router-dom";
import "../styles/cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-image" />
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
            <input type="number" value={item.quantity} min="1" onChange={(e) => dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))} className="cart-quantity" />
            <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">Remove</button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <div className="checkout-section">
          <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
