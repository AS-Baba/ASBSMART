import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/Product/ProductSlice";
import cartReducer from "./features/cart/cartSlice";
import modalReducer from "./features/Modal/modalSlice";
import viewProductReducer from "./Components/Cart/features/viewProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    products: productReducer,
    viewProduct: viewProductReducer,
  },
});
