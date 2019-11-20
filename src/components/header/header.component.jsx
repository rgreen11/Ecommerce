import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
// higher order component - functions that take up components are arguments and suppued up component
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cartdropdown/cart-dropdown";
import { auth } from "../../firebase/firebase";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/content">
          Content
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className="option" to="/signin">
            {" "}
            Sign in
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropDown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
