import "./Cart.css";
import React, { useCallback, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import { DeliveryDetails } from "./DeliveryDetails";
import { useParams } from "react-router";
import { productServices } from "../../features/Product/ProductSlice";
import { getSingleProduct } from "./features/viewProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";

export const ViewProduct = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
  }

  const [item, setItem] = useState([]);
  const { id } = useParams();

  const fetchDetails = useCallback(() => {
    dispatch(getSingleProduct({ id: id }));
  }, [dispatch, id]);

  const loadItem = async () => {
    const response = await productServices.loadItem(id);
    console.log(response);
    setItem(response.data);
  };

  // useEffect(()=>{
  //   fetchDetails()
  // },[fetchDetails])

  useEffect(() => {
    loadItem();
  }, []);

  return (
    <div className=" container cartContainer ">
      <div className="row">
        {/* <ProductImg /> */}
        <div className="col-md-4">
          <div className=" productImg card bg-transparent">
            <img
              src={item?.image}
              alt=""
              className="card-img-top"
              height={300}
            />
            <div className="row m-auto">
              <div className="col m-auto rounded">
                <img src={item?.image} alt="" width={50} height={50} />
              </div>
              <div className="col m-auto rounded">
                <img src={item?.image} alt="" width={50} height={50} />
              </div>
              <div className="col m-auto rounded">
                <img src={item?.image} alt="" width={50} height={50} />
              </div>
            </div>
          </div>

          <div className="mt-3">
            <h6>Share this product</h6>
            <hr />
            <FaWhatsapp className="m-3 mt-0 h3" />
            <FaFacebook className="m-3 mt-0 h3" />
            <FaTwitter className="m-3 mt-0 h3" />
          </div>
        </div>
        {/* <ProductDetails/> */}
        <div className="col-md-4">
          <div className="productSpec">
            <h6>Product Details</h6>
            <hr />
            <h1 className="card-title text-success">&#8358; {item?.price}</h1>
            <p className="card-text">{item?.title}</p>
            <p className="card-text">{item?.category}</p>
            <p className="card-text">Free delivery to anywhere in Biu</p>
            <Link to="/cartcontainer">
              <button className="btn btn-block btn-primary mt-3 w-100 " onClick={() => {handleAddToCart(item)}}>
                <FaShoppingCart /> Add To Cart
              </button>
            </Link>
          </div>
          {/* <SellersInfo /> */}
          <div className="card mt-4">
            <div className="card-body">
              <h6 className="card-title text-primary">Seller's Information</h6>
              <hr />
              <p className="card-title text-">
                Mai Talkalma Shopping Complex Biu
              </p>
              <button className="btn btn-outline-secondary m-1 ">
                See Our Collections
              </button>
              <button className="btn  text-primary">
                <FaRegHeart className="h5" />
              </button>
            </div>
          </div>
        </div>

        <DeliveryDetails />
      </div>
    </div>
  );
};
