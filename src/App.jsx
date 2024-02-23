import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { NavBar } from "./Navbar/Navbar";
import CartContainer from "./CartContainer";
import { calculateTotals } from "./features/cart/cartSlice";
import { useEffect } from "react";
import {Modal} from "./Modal";

export function App() {
  const count = useSelector((state) => state.counter.count);
  const {cartItems} = useSelector((state) => state.cart)
  const {isOpen} = useSelector((state) => state.modal)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])
  return (
    <>
     {isOpen && <Modal/>}
      <NavBar />
      <CartContainer/>
     
    </>
  );
}
