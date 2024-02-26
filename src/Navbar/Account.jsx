import React from "react";
import { FaBox, FaCreditCard, FaRegHeart,  FaUser } from "react-icons/fa";
import { ShoppingBag } from "../assets/icons";

export const Account = () => {
  return (
    <div className="Account">
      {/* <button className="btn btn-warning self-align-center">Sign In</button> */}
      <hr />
      <p>{<FaUser />} My Account</p>
      <p>{<ShoppingBag />} Orders</p>
      <p>{<FaRegHeart />} Saved Items</p>
      <p>{<FaBox />} Inbox</p>
      <p>{<FaCreditCard />}Vouchers</p>
    </div>
  );
};
