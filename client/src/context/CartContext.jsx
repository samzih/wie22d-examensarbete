import { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const CartContext = createContext({
    cartItems: [],
    setCartItems: () => { },
    addToCart: () => { },
    removeFromCart: () => { },
    increaseQuantity: () => { },
    decreaseQuantity: () => { },
    emptyCart: () => { },
    cartTotalPrice: 0,
});

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useLocalStorage('cart', []);


    // Calculate total price of all cart items (incl. quantity)
    const cartTotalPrice = cartItems.reduce((acc, currentItem) => (
        acc + (currentItem.product.default_price.unit_amount / 100) * currentItem.quantity
    ), 0);


    const addToCart = (product) => {

        // Check if the product item already exists in the cartItems array
        const existingItem = cartItems.find(item => item.product.id === product.id);

        // If the product item exists increment the quantity, else add it to the array with a quantity of 1
        if (existingItem) {
            existingItem.quantity++;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, { product, quantity: 1 }])
        }

    }


    const removeFromCart = (productID) => {
        const updatedCart = cartItems.filter(item => item.product.id !== productID);
        setCartItems(updatedCart);
    }


    const increaseQuantity = (product) => {

        const currentItem = cartItems.find(item => item.product.id === product.id);

        if (currentItem) {
            currentItem.quantity++;
            setCartItems([...cartItems]);
        }

    }


    const decreaseQuantity = (product) => {

        const currentItem = cartItems.find(item => item.product.id === product.id);

        if (currentItem.quantity > 1) {
            currentItem.quantity--;
            setCartItems([...cartItems]);
        } else {
            removeFromCart(product.id);
        }

    }


    const emptyCart = () => {
        setCartItems([]);
    }


    return (
        <div>
            <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, emptyCart, cartTotalPrice }}>
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider
