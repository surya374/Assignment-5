import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-container">
      <div className="product-card">
        <img src={product.image} alt="img" className="product-img" />
        <h2 className="product-title">{product.name}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">₹{product.price}</p>
        <button onClick={() => addToCart(product)} className="button">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
