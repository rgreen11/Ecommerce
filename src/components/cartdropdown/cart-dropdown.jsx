import React from "react";
import "../../sass/cart-dropdown.style.scss";
import CustomButton from "../button/custom-button.component";

export default () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);
