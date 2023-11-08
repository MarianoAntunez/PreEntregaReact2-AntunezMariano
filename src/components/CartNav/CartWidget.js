import React from "react";
import "./CartWidget.css";
import IconCart from "./icon-cart.png";

const CartWidget = () => {
  return (
    <div className="cart">
      <a href="">
        <img src={IconCart} alt="img" />
        <span>0</span>
      </a>
    </div>
  );
};

export default CartWidget;
