import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "./Cart/features/viewProductSlice";
export const Product = ({ id, image, title, price, description, category }) => {
  const dispatch = useDispatch()

  return (
    <div className=" col-6  col-md-2 mb-3" key={id}>
      <div className="card">
        <Link to={`/viewproduct/${id}`}>
          <img
            src={image}
            className="card-img-top"
            alt="..."
            height={100}
            onClick={() => dispatch(getSingleProduct({ id }))}
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
