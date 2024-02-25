import React from "react";
import image from "../asset/Products/1bc0d0e472c3466a99f0a3cfac8e3e94.jpg";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";

export const ProductImg = () => {
  return (
    <div className="col-md-4">
      <div className=" productImg card bg-transparent">
        <img src={image} alt="" className="card-img-top" height={300} />
        <div className="row m-auto">
          <div className="col m-auto rounded"><img src={image} alt="" width={50} height={50} /></div>
          <div className="col m-auto rounded"><img src={image} alt="" width={50} height={50} /></div>
          <div className="col m-auto rounded"><img src={image} alt="" width={50} height={50} /></div>
          
        </div>
      </div>

      <div className="mt-3">
        <h6>Share this product</h6>
        <hr />
        <FaWhatsapp className="m-3 mt-0 h3"/>
        <FaFacebook className="m-3 mt-0 h3"/>
        <FaTwitter className="m-3 mt-0 h3"/>
      </div>
    </div>
  );
};

