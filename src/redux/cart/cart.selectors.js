import { createSelector } from "reselect";

//input selector
const selectCart = state => state.cart;

//output selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

//another selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0
    )
);