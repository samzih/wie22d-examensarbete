import { createContext, useContext, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const CartContext = createContext({
    cartItems: [],
    setCartItems: () => { },
    addToCart: () => { },
});

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useLocalStorage('cart', []);


    const addToCart = (product) => {

        // Check if the product item already exists in the cartItems array
        const existingItem = cartItems.find(item => item.product.id === product.id);

        // If the product item exists increment the quantity, else add it to the array with a quantity of 1
        if (existingItem) {
            existingItem.quantity++;
            setCartItems([...cartItems]);
        } else {
            setCartItems([...cartItems, { product: product, quantity: 1 }])
        }

    }


    return (
        <div>
            <CartContext.Provider value={{ cartItems, setCartItems, addToCart }}>
                {children}
            </CartContext.Provider>
        </div>
    );
};

export default CartProvider
