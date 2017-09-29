export const handleAddtoCart = "handleAddtoCart";
export const handleRemoveFromCart = "handleRemoveFromCart";

export function addToCart(menuItem) {
    return {
        type: handleAddtoCart,
        menuItem
    }
}

export function removeFromCart(cartItem) {
    return {
        type: handleRemoveFromCart,
        cartItem
    }
}
