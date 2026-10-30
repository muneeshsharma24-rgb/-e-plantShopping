
import React, { useState } from "react";
import AboutUs from "./AboutUs";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleGetStartedClick = () => {
    setCurrentPage("plants");
  };

  const handleContinueShopping = () => {
    setCurrentPage("plants");
  };

  const handleGoHome = () => {
    setCurrentPage("home");
  };

  const handleOpenCart = () => {
    setCurrentPage("cart");
  };

  return (
    <div className="app">

      {currentPage === "home" && (
        <div className="landing-page">

          <h1>Welcome to Paradise Nursery</h1>

          <h2>Bring Nature Into Your Home</h2>

          <p>
            Discover beautiful indoor and outdoor plants
            for your home and office.
          </p>

          <button onClick={handleGetStartedClick}>
            Get Started
          </button>

          <AboutUs />

        </div>
      )}

      {currentPage === "plants" && (
        <ProductList
          onHome={handleGoHome}
          onCart={handleOpenCart}
        />
      )}

      {currentPage === "cart" && (
        <CartItem
          onContinueShopping={handleContinueShopping}
          onHome={handleGoHome}
          onCart={handleOpenCart}
        />
      )}

    </div>
  );
}

export default App;
