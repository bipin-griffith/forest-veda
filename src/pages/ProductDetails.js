import React from "react";
import { useParams } from "react-router-dom";
import productsData from "../data/products.json";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartReducer";
import "../styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="detail-image" />
      <div className="detail-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h3>Price: ₹{product.price}</h3>
        <button onClick={() => dispatch(addToCart(product))} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
