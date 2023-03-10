import React from "react";

import { Link } from 'react-router-dom';
import { connect } from "react-redux";

//user selector
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//user selector
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo } from "../../assets/crown.svg"

import './header.styles.scss'

// const Header = ({ currentUser }) => (
const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to={'/'}>
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to={'/shop'}>
                SHOP
            </Link>
            <Link className="option" to={'/shop'}>
                CONTACT
            </Link>
            {
                currentUser ? (
                    <div className="option" onClick={() => { auth.signOut() }}>
                        SIGN OUT
                    </div>
                ) : (
                    <Link className="option" to="/signin">
                        SIGN IN
                    </Link>
                )
            }
            <CartIcon />
        </div>
        {
            hidden ? null : (<CartDropdown />)
        }

    </div>
);

//Redux set-up
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser
// });

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// });

//user selector
const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    });

export default connect(mapStateToProps)(Header);

// export default Header;