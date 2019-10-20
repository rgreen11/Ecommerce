export const addItemToCart = (cartItems, addcartItem) => {
    const existingCartItem = cartItems.find(cartItems => cartItems.id === addcartItem.id);

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItems.id === addcartItem.id
                ? { ...cartItems, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...addcartItem, quantity: 1 }]
}