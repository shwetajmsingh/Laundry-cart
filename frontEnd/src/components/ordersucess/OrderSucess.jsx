import React from "react";
import "./ordersucess.css";
import { Link } from "react-router-dom";

const OrderSucess = () => {
  return (
    <>
      <div className="popup2">
        <div className="click-icon">
          <div className="circle">
            <div className="i">
              <img src="/images/check icon.png" alt="check" />
            </div>
          </div>
        </div>
        <div className="headline">
          <h1>Your Order is Sucessfully Placed.</h1>
        </div>
        <div className="para">
          You can track the delivery in "Orders" section.
        </div>
        <div className="orderbutton">
          <Link to="/mainpage">
            <button className="goto-orders">Go to Orders</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderSucess;
