import { ChevronDown, ChevronUp } from "./assets/icons";
import image from "./assets/asb.png";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, removeItem } from "./features/cart/cartSlice";
import { openModal } from "./features/Modal/modalSlice";

export default function CartItem({ id, image, title, price, amount }) {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">&#8358;{price}</h4>
        <button className="remove-btn" onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => {
            dispatch(increment({ id }));
          }}
        >
          <ChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrement({ id }));
          }}
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
}
