import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
// import CartItem from "";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrement: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

// console.log(cartSlice);
export const { increment, decrement, removeItem, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
