import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../store/cartReducer";

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
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) =>
                dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))
              }
              className="cart-quantity"
            />
            <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
