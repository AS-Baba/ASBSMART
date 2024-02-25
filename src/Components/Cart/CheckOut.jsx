import { MdDelete } from "react-icons/md";

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { productServices } from "../Products/Product";
import {FaCaretRight } from "react-icons/fa";

const CheckOut = () => {
  const { id } = useParams();
  const [item, setItem] = useState([]);

  const loadItem = async () => {
    const response = await productServices.loadItem(id);
    setItem(response.data);
    console.log(item);
  };

  useEffect(() => {
    loadItem();
  }, []);

  return (
    <div className="card container cartContainer  checkOut">
      <h4 className="card-title">Cart: 1</h4>
      <hr className="text-white h1" />
      <div className="row justify-content-evenly">
        <div className="col-md-2">
          <div className=" productImg card bg-transparent">
            <img
              src={item?.image}
              alt=""
              className="card-img-top"
              height={200}
            />
            {/* &#8358; */}
          </div>
        </div>
        <div className=" productSpec col-md-4 mb-3">
          <h1 className="card-title text-success">&#8358; {item?.price}</h1>
          <p className="card-text text-primary">{item?.title}</p>
          <p className="card-text mb-3">From Iye Odo Shopping Complex</p>
          <div className="d-flex col-md-12  justify-content-between mb-3">
            <button className="btn btn-sm btn-warning ">
              <MdDelete /> Remove
            </button>
            <div>
              <button className="btn btn-sm btn-primary ">-</button>
              <span className="m-2">1</span>
              <button className="btn btn-sm btn-primary">+</button>
            </div>
          </div>
        </div>
        <div className=" col-md-4">
          <h4 className="card-ti">Cart Summary</h4>
          <hr className="text-l" />
          <h5 className="card-text ">Subtotal: {item?.price}</h5>
          <button className="btn btn-primary mb-3">Checkout <FaCaretRight /></button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
