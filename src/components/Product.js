import React, { useState } from "react";
import "../styles.css";
//import Cart from "./Cart";

export default function Product({ product, addProductToCart }) {
  const errorHandler = (e) => (e.target.src = "images/logo.png");
  const [inCart, setInCart] = useState(false); // State to track if product is in cart

  const addToCart = () => {
    addProductToCart(product);
    setInCart(true); // Update state to indicate product is in cart
  };

  return (
    <div key={product.id} className="product">
      <img
        src={`images/${product.image}`}
        alt={product.title}
        onError={errorHandler}
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-price">{product.price}</p>
        <p className="product-rating">{product.rating}</p>
        <p className="product-description">{product.description}</p>
      </div>
      <button
        onClick={() => addToCart(product)}
        className={inCart ? "added-to-cart" : "item-btn"}
      >
        Add to Cart
      </button>
    </div>
  );
}
