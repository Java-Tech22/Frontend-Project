import React, { useState, useEffect } from "react";
import "../styles.css";
import Product from "./Product";

export default function ProductsGrid() {
  const [products, setProducts] = useState([]); // products is a state variable and setProducts is function which sets the state
  const [search, setSearch] = useState("");
  const [price, setprice] = useState("");
  const [rating, setRating] = useState("");

  useEffect(() => {
    fetch("products.json") // async call
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []); // useEffect actually sets the state of our product/used to load the data or file. When do you want reparse this effect.

  const searchHandler = (e) => setSearch(e.target.value);
  const priceHandler = (e) => setprice(e.target.value);
  const ratingHandler = (e) => setRating(e.target.value);

  const matchesPrice = (productPrice, price) => {
    if (price === "<=$10") {
      return productPrice <= 10;
    } else if (price === "$10-$20") {
      return productPrice > 10 && productPrice <= 20;
    } else if (price === "$20-$30") {
      return productPrice > 20 && productPrice <= 30;
    } else if (price === "$30-$40") {
      return productPrice > 30 && productPrice <= 40;
    } else if (price === "$40-$50") {
      return productPrice > 40 && productPrice <= 50;
    }
    return true;
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search);
    const productPrice = parseFloat(product.price.substring(1));
    const matchesRate = !rating || product.rating === parseFloat(rating);
    return matchesPrice(productPrice, price) && matchesRate && matchesSearch;
  });

  return (
    <div>
      <input
        type="text"
        className="search-input"
        value={search}
        onChange={searchHandler}
        placeholder="Search products"
      />
      <div className="filter-bar">
        <div className="filter-slot">
          <label>Price</label>
          <select
            className="filter-dropdown"
            onChange={priceHandler}
            value={price}
          >
            <option value="">All Prices</option>
            <option value="<=$10">{"<=$10"}</option>
            <option value="$10-$20">{"$10-$20"}</option>
            <option value="$20-$30">{"$20-$30"}</option>
            <option value="$30-$40">{"$30-$40"}</option>
            <option value="$40-$50">{"$40-$50"}</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={rating}
            onChange={ratingHandler}
          >
            <option>Rating</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
      </div>
      <div className="products-grid">
        {filteredProducts.map((prod) => (
          <Product product={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
}
