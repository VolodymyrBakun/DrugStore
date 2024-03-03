import React, { createContext, useState } from 'react'

export const ShopContext = createContext(null);

let defState = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(defState);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    };

    const removeFromCart = (itemId) => {
      setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    console.log(cartItems);

    const contextValue = {cartItems, addToCart, removeFromCart}

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
