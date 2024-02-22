import React from "react";

const Delivery = () => {
  return (
    <div>
      <div className="mb-3 ">
        <input type="text" name="address" className="form-control"
        
          placeholder="Change  Address"
        />
      </div>
        <input
          type="submit"
          className="btn btn-outline-success"
        />
    </div>
  );
};

export default Delivery;
