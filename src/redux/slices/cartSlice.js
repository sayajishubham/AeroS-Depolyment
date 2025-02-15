import { createSlice } from '@reduxjs/toolkit';

const loadCartFromStorage = () => {
  try {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    return savedCart;
  } catch (error) {
    console.error("Error loading cart from storage:", error);
    return [];
  }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: loadCartFromStorage(),
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      try {
        localStorage.setItem("cart", JSON.stringify(state.items));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      try {
        localStorage.setItem("cart", JSON.stringify(state.items));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, newQuantity } = action.payload;
      const item = state.items.find(item => item.id === itemId);
      if (item) {
        if (newQuantity > 0) {
          item.quantity = newQuantity;
        } else {
          state.items = state.items.filter(item => item.id !== itemId);
        }
        try {
          localStorage.setItem("cart", JSON.stringify(state.items));
        } catch (error) {
          console.error("Error saving cart to localStorage:", error);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      try {
        localStorage.removeItem("cart");
      } catch (error) {
        console.error("Error clearing cart from localStorage:", error);
      }
    }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

export const selectCart = state => state.cart.items;
export const selectCartCount = state => state.cart.items.length;
export const selectTotalPrice = state =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;