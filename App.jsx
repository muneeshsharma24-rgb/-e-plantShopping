
import React, { useState } from "react";
import { useSelector } from "react-redux";

import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function App() {

  const [showProductList, setShowProductList] =
    useState(false);

  const [showCart, setShowCart] = useState(false);

  const cartItems = useSelector(
    state => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="app">

      <nav>
        <h2>🌿 Paradise Nursery</h2>

        <button onClick={() => {
          setShowProductList(false);
          setShowCart(false);
        }}>
          Home
        </button>

        <button onClick={() => {
          setShowProductList(true);
          setShowCart(false);
        }}>
          Plants
        </button>

        <button onClick={() => {
          setShowCart(true);
          setShowProductList(false);
        }}>
          Cart ({totalItems})
        </button>
      </nav>

      {!showProductList && !showCart ? (

        <div className="landing-page">

          <h1>Paradise Nursery</h1>

          <h2>Welcome to Our Plant Shop</h2>

          <p>
            Discover beautiful plants for your
            home and office.
          </p>

          <button
            onClick={() => setShowProductList(true)}
          >
            Get Started
          </button>

          <AboutUs />

        </div>

      ) : showProductList ? (

        <ProductList />

      ) : (

        <CartItem />

      )}

    </div>
  );
}

export default App;
