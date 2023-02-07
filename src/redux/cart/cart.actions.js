
import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

//Add cart items
export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});