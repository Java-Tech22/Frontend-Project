import "./App.css";
import React, { useState, useEffect } from "react";
import { getProducts } from "./services/apiService";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductsGrid from "./components/ProductsGrid";
import Cart from "./components/Cart";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [products, setProducts] = useState([]); //// products is a state variable and setProducts is function which sets the state
  const [cart, setCart] = useState("");

  const addProductToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log("Add to cart");
  };

  useEffect(() => {
    getProducts() // async call
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <div className="container">
        <Header></Header>
        <div>
          <Router>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
              </ul>
            </nav>

            <Routes>
              <Route
                path="/"
                element={
                  <ProductsGrid
                    products={products}
                    addProductToCart={addProductToCart}
                  ></ProductsGrid>
                }
              ></Route>
              <Route
                path="/cart"
                element={<Cart products={cart}></Cart>}
              ></Route>
            </Routes>
          </Router>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
