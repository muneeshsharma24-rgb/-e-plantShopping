
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  removeItem,
  updateQuantity
} from "./CartSlice";

import { Navbar } from "./ProductList";

function CartItem({
  onContinueShopping,
  onHome,
  onCart
}) {
  const dispatch = useDispatch();

  const items = useSelector(
    (state) => state.cart.items
  );

  // Calculate total number of products
  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return items.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  };

  // Calculate individual item total
  const calculateTotalCost = (item) => {
    return item.price * item.quantity;
  };

  // Increase quantity
  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  // Decrease quantity or remove item
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  // Delete product
  const handleRemove = (item) => {
    dispatch(removeItem(item.id));
  };

  // Checkout
  const handleCheckout = () => {
    window.alert(
      "Thank you for shopping at Paradise Nursery! Checkout functionality coming soon."
    );
  };

  return (
    <div className="shopping-cart">

      <Navbar
        onHome={onHome}
        onPlants={onContinueShopping}
        onCart={onCart}
      />

      <div className="cart-container">

        <h1>Shopping Cart</h1>

        {items.length === 0 ? (

          <div className="empty-cart">
            <h2>Your Shopping Cart is Empty!</h2>

            <p>
              Discover beautiful plants for your home.
            </p>

            <button
              className="get-started-button"
              onClick={onContinueShopping}
            >
              Continue Shopping
            </button>
          </div>

        ) : (

          <>

            {items.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">

                  <h3 className="cart-item-name">
                    {item.name}
                  </h3>

                  <p className="cart-item-cost">
                    Unit Price: ${item.price.toFixed(2)}
                  </p>

                  <p className="cart-item-total">
                    Item Total: $
                    {calculateTotalCost(item).toFixed(2)}
                  </p>

                  <div className="quantity-controls">

                    <button
                      onClick={() => handleDecrement(item)}
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleIncrement(item)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="cart-item-delete"
                    onClick={() => handleRemove(item)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            ))}

            <div className="cart-summary">

              <h2>Order Summary</h2>

              <p>
                Total Items: {totalItems}
              </p>

              <h2>
                Total Cart Amount: $
                {calculateTotalAmount().toFixed(2)}
              </h2>

              <button
                className="get-started-button1"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <button
                className="get-started-button"
                onClick={onContinueShopping}
              >
                Continue Shopping
              </button>

            </div>

          </>

        )}

      </div>

    </div>
  );
}

export default CartItem;
