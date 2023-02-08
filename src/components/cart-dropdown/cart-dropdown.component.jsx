import React from "react";

import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import CartItem from "../cart-item/cart-item.component";

//another selector
import { selectCartItems } from "../../redux/cart/cart.selectors";

import './cart-dropdown.styles.scss';

// const CartDropdown = () => (
//     <div className="cart-dropdown">
//         <div className="cart-items" />
//         <CustomButton>CHECKOUT</CustomButton>
//     </div>
// );

const CartDropdown = ({ cartItems }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>CHECKOUT</CustomButton>
    </div>
);

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     cartItems
// });

//another selector(save us our performance in CHECKOUT box when we sign out in our App)
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});
export default connect(mapStateToProps)(CartDropdown);


// export default CartDropdown;