// import "../cart.css";
import { closeModal } from "./features/Modal/modalSlice";
import { removeItem } from "./features/cart/cartSlice";
import { useDispatch } from "react-redux";


export const Modal = ({id}) => {
  const dispatch = useDispatch();
  return (
    <aside className="modal-container">
      <div className="Modal">
        <h4>remove item from cart</h4>

        <div className="btn-container">
          <button
            type="button"
            className="confirm-btn"
            onClick={() => {
              dispatch(removeItem());
              dispatch(closeModal());
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            className="clear-btn"
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
