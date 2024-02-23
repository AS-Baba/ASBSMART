import React from "react";
import { FaBox } from "react-icons/fa";
import { ShoppingBag, ShoppingCart } from "../assets/icons";

export const Account = () => {
  return (
    <div className="Account">
      {/* <button className="btn btn-warning self-align-center">Sign In</button> */}
      <hr />
      <p>{<ShoppingBag />} Orders</p>
      <p>{<ShoppingCart/>} Saved Items</p>
      <p>Inbox</p>
      <p>Vouchers</p>
    </div>
  );
};
