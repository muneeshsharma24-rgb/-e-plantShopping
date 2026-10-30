
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({

  name: "cart",

  initialState: {
    items: []
  },

  reducers: {

    // Add product to cart
    addItem: (state, action) => {

      const product = action.payload;

      const existingItem = state.items.find(
        item => item.id === product.id
      );

      if (existingItem) {

        existingItem.quantity += 1;

      } else {

        state.items.push({
          ...product,
          quantity: 1
        });

      }
    },

    // Remove product from cart
    removeItem: (state, action) => {

      state.items = state.items.filter(
        item => item.id !== action.payload
      );

    },

    // Update product quantity
    updateQuantity: (state, action) => {

      const { id, quantity } = action.payload;

      const item = state.items.find(
        product => product.id === id
      );

      if (item) {

        if (quantity <= 0) {

          state.items = state.items.filter(
            product => product.id !== id
          );

        } else {

          item.quantity = quantity;

        }

      }
    }

  }

});

export const {
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
