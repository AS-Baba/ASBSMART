import { Pickup } from "./Pickup";
import { DoorDelivery } from "./DoorDelivery";
import { FaCarAlt, FaMapMarkerAlt } from "react-icons/fa";

export const DeliveryDetails = () => {
  return (
    <div className="col-md-4">
      <h6>
        {" "}
        <FaCarAlt /> Delivery & Return
      </h6>
      <hr />
      <h5>
        <FaMapMarkerAlt /> Choose Your Location{" "}
      </h5>
      <select name="" id="" className="form-select">
        <option value="">Nasarawa Biu</option>
        <option value="">Locust Biu</option>
        <option value="">Ugwan Sarki Biu</option>
        <option value="">Galdimare Biu</option>
      </select>
      <div className="ro">
        <Pickup />
        <DoorDelivery />
      </div>
    </div>
  );
};
