import React from "react";
import {FaHands} from "react-icons/fa";

export const Pickup = () => {
  return (
    <div className="card deliveryCard">
      <div className="card-body">
        <h6 className="card-title text-primary"> Pickup</h6>
        <hr />
        <p className="card-text">
          Your items will be delivered to the station in your address within 30 to 45 minutes from the time you place your order then you go pick it. If item is not picked from 1 to 2 hours of delivery, it will automatically be cancelled. 
        </p>
      </div>
    </div>
  );
};

