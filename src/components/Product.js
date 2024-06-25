import React from "react";
import "../styles.css";

export default function Product({ product }) {
  const errorHandler = (e) => (e.target.src = "images/logo.png");

  return (
    <div key={product.id} className="product">
      <img
        src={`images/${product.image}`}
        alt={product.title}
        onError={errorHandler}
      />
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <p className="product-rating">`getRating({product.rating})`</p>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
}
