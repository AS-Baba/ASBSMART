import { Link } from "react-router-dom";

export const Product = ({ id, image, title, price, description, category }) => {
  return (
    <div className=" col-6  col-md-2 mb-3" key={id}>
      <div className="card">
        <Link to={`/cart/${id}`}>
          <img
            src={image}
            className="card-img-top"
            alt="..."
            height={100}
            onClick={() => dispatch({ type: "ADD_TO_CART", payload: item.id })}
          />
        </Link>
        <div className="card-body">
          <p className="card-text">{category}</p>
          <p className="card-text">&#8358;{price}</p>
        </div>
      </div>
    </div>
  );
};
