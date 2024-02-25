import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import SellersInfo from "./SellersInfo";

export const ProductDetails = () => {
  return (
    <div className="col-md-4">
      <div className="productSpec">
        <h6>Product Details</h6>
        <hr />
        <h1 className="card-title text-success">&#8358; 3,500</h1>
        <p className="card-text">Men Canvas</p>
        <p className="card-text">Black</p>
        <p className="card-text">Free delivery to anywhere in Biu</p>
        <button className="btn btn-block btn-primary mt-3 w-100 ">
          <FaShoppingCart /> Add To Cart
        </button>
      </div>
      <SellersInfo />
    </div>
  );
};

