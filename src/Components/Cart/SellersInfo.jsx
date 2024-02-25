import React from "react";
import { FaHeart, FaRegHeart, FaThumbsUp } from "react-icons/fa";

export const SellersInfo = () => {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h6 className="card-title text-primary">Seller's Information</h6>
        <hr />
        <p className="card-title text-">Mai Talkalma Shopping Complex Biu</p>
        <button className="btn btn-outline-secondary me-3">See Our Collections</button>
        <button className="btn text-primary"><FaRegHeart className="h5"/></button>

      </div>
    </div>
  );
};

