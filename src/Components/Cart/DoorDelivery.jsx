import React from "react";
import { FaDoorOpen, FaHome, FaHouseUser } from "react-icons/fa";

export const DoorDelivery = () => {
  return (
    <div className="card deliveryCard">
      <div className="card-body">
        <h6 className="card-title text-primary"> Door Delivery</h6>
        <hr />
        <p className="card-text">
          Your item will be delivered to your home address within 45 to 1 hours
          from the time you placed your order. You'll receive a call or message
          from the delivery confirming your location. You'll receive a form to
          fill in your email confirming you've received your item.
        </p>
      </div>
    </div>
  );
};

