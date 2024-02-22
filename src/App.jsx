import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  clearCounter,
} from "./countSlice";
import "./App.css";
import NavBar from "./Navbar/Navbar";

export function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />
      <h1>Count: {count}</h1>
      <button
        className="btn btn-primary me-2"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        className="btn btn-primary me-2"
        onClick={() => dispatch(incrementByAmount(10))}
      >
        Increment By Amount
      </button>
      <button className="btn btn-primary me-2" onClick={() => dispatch(clearCounter())}>Clear</button>
    </>
  );
}

