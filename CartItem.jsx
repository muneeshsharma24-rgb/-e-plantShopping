
import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  removeItem,
  updateQuantity
} from "./CartSlice";

function CartItem() {

  const dispatch = useDispatch();

  const items = useSelector(
    state => state.cart.items
  );

  // Calculate total quantity
  const totalItems = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate total shopping amount
  const totalAmount = items.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (

    <div className="shopping-cart">

      <h1>Shopping Cart</h1>

      {items.length === 0 ? (

        <div>
          <h2>Your Cart is Empty!</h2>
          <p>Please add some plants to your cart.</p>
        </div>

      ) : (

        items.map(item => (

          <div
            className="cart-item"
            key={item.id}
          >

            <h3>{item.name}</h3>

            <p>
              Price: ${item.price}
            </p>

            <p>
              Quantity: {item.quantity}
            </p>

            <p>
              Item Total: $
              {(item.price * item.quantity).toFixed(2)}
            </p>

            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity - 1
                  })
                )
              }
            >
              -
            </button>

            <button
              onClick={() =>
                dispatch(
                  updateQuantity({
                    id: item.id,
                    quantity: item.quantity + 1
                  })
                )
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(removeItem(item.id))
              }
            >
              Remove
            </button>

          </div>

        ))

      )}

      <hr />

      <h2>
        Total Items: {totalItems}
      </h2>

      <h2>
        Total Amount: ${totalAmount.toFixed(2)}
      </h2>

      <button
        disabled={items.length === 0}
        onClick={() => {
          alert("Thank you for shopping at Paradise Nursery!");
        }}
      >
        Checkout
      </button>

    </div>

  );
}

export default CartItem;
