import React from "react";
import "../styles.css";

export default function Cart({ products }) {
  if (!Array.isArray(products)) {
    return <p>Items Not Available !!</p>;
  }

  return (
    <div>
      <div></div>
      <h2 className="product-title">Cart Items</h2>
      {products.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <p>
                <img src={`images/${product.image}`} alt={product.title} />
              </p>
              {product.title} - {product.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
