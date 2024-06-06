import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./style.css";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, parseInt(quantity, 10));
  };

  return (
    <div className="product-container">
      {cart.map((item) => (
        <div key={item.id} className="product-card">
          <div>
            <img src={item.image} alt="imag" className="product-img" />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <input
              type="number"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              min="1"
            />
            <button className="button" onClick={() => removeFromCart(item.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
      <button className="btn-checkout">Checkout</button>
    </div>
  );
}
