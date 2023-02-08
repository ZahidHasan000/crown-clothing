import React from "react";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

//another selector
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

// const CartIcon = () => (
// const CartIcon = ({ toggleCartHidden }) => (
//     <div className="cart-icon" onClick={toggleCartHidden}>
//         <ShoppingIcon className="shopping-icon" />
//         <span className="item-count" >0</span>

//     </div>
// );

//Selector in redux(cart icon value pull up)
const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon" />
        <span className="item-count" >{itemCount}</span>

    </div>
);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//Selector in redux(cart icon value pull up)
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//     itemCount: cartItems.reduce(
//         (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
//     )
// });

//another selector
const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
});

//Selector in redux(cart icon value pull up)
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

// export default connect(null, mapDispatchToProps)(CartIcon);

// export default CartIcon;