import React from "react";

//checkout page 2
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

//Checkout-Item component
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

// import { selectCartItems } from "../../redux/cart/cart.selectors";

//(Modify after(cart.reducer.js)) checkout page 2
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";

import './checkout.styles.scss'

// checkout page
// const CheckoutPage = () => (
//     <div>
//         Checkout Page
//     </div>
// );

//checkout page 2
// const CheckoutPage = () => (

//(Modify after(cart.reducer.js)) checkout page 2
const CheckoutPage = ({ cartItems, total }) => (

    <div className="checkout-page">
        <div className="checkout-header">

            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>

        </div>

        {/*(Modify after(cart.reducer.js)) checkout page 2 */}
        {/* {
            cartItems.map(cartItem => cartItem.name)
        } */}

        {/* Reason for Checkout-Item component */}
        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}

        <div className="total">
            <span>TOTAL: ${total}</span>
        </div>
    </div>
);

//checkout page 2
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,

    //(Modify after(cart.reducer.js)) checkout page 2
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);