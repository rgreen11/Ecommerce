import React from "react";
import { connect } from "react-redux";
import "../../sass/cart-dropdown.style.scss";
import CustomButton from "../button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => history.push("/checkout")}>
        Go to Checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
