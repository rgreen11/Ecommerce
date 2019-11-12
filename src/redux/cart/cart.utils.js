export const addItemToCart = (cartItems, addcartItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === addcartItem.id);

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === addcartItem.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...addcartItem, quantity: 1 }]
}