import React, { useState } from "react";
import "../styles/adminPanel.css";
import productsData from "../data/products.json";

const AdminPanel = () => {
  const [products, setProducts] = useState(productsData);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "", category: "" });

  const addProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.image || !newProduct.category) {
      alert("Please fill all fields.");
      return;
    }
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setNewProduct({ name: "", price: "", image: "", category: "" });
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="admin-container">
      <h2>Admin Panel</h2>
      <div className="admin-form">
        <input type="text" placeholder="Product Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
        <input type="text" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
        <input type="text" placeholder="Image URL" value={newProduct.image} onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })} />
        <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
        <button onClick={addProduct}>Add Product</button>
      </div>

      <h3>Product List</h3>
      {products.map((product) => (
        <div key={product.id} className="admin-product">
          <img src={product.image} alt={product.name} className="admin-image" />
          <p>{product.name} - ₹{product.price}</p>
          <button onClick={() => deleteProduct(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
