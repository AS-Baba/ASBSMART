import React from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";


export const HelpDesk = () => {
  return (
    <div>
      <ul>
        <li>
          {" "}
          <BsFillPatchQuestionFill /> Place an order
        </li>
        <li>
          {" "}
          <BsFillPatchQuestionFill /> Track an order
        </li>
        <li>
          {" "}
          <BsFillPatchQuestionFill /> Make payment
        </li>
        <li>
          <BsFillPatchQuestionFill /> Cancel an order
        </li>
        <li>
          <BsFillPatchQuestionFill /> Return & Refund
        </li>
        <li>
          <button className="btn btn-success">Live Chat</button>
        </li>
      </ul>
    </div>
  );
};

