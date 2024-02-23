import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./ProductSlice";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/Modal/modalSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    modal: modalReducer,
    products: [],
  },
});
