import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { NavBar } from "./Navbar/Navbar";
import { getProductItems } from "./features/Product/ProductSlice";
// import CartContainer from "./CartContainer";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { Modal } from "./Modal";
import ProductsContainer from "./Components/ProductsContainer";
import { Cart } from "./Components/Cart/Cart";
import { Route, Routes } from "react-router-dom";

export function App() {
  const { getProductItem } = useSelector((state) => state.products);

  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(getProductItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <>
      {isOpen && <Modal />}
      <NavBar />
      <Routes>
        <Route path="/cart/:id" element={<Cart />} />
        <Route
          path="/"
          element={
            <div className="container">
              <ProductsContainer />
            </div>
          }
        />
      </Routes>
    </>
  );
}
