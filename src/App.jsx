import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { NavBar } from "./Navbar/Navbar";
import { getProductItems } from "./features/Product/ProductSlice";
// import CartContainer from "./CartContainer";
import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import { useEffect } from "react";
import { Modal } from "./Modal";
import ProductsContainer from "./Components/ProductsContainer";
import { ViewProduct } from "./Components/Cart/ViewProduct";
import { Route, Routes } from "react-router-dom";
import { getSingleProduct } from "./Components/Cart/features/viewProductSlice";
import CartContainer from "./CartContainer";

export function App() {
  // const { getProductItem } = useSelector((state) => state.products);

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
  useEffect(()=>{
    dispatch(getSingleProduct())
  },[getSingleProduct])

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
        <Route path="/viewproduct/:id" element={<ViewProduct />} />
        <Route path="/cartcontainer" element = {<CartContainer/>}/>
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
