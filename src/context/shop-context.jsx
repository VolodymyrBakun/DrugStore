import { PRODUCTS } from 'products';
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

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount
}

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
    };

    const removeFromCart = (itemId) => {
      setCartItems(prev => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount = (newAmount, itemId) => {setCartItems(prev => ({...prev,[itemId]: newAmount}))}
        


    const contextValue = {
      cartItems,
      addToCart,
      removeFromCart,
      updateCartItemCount,
      getTotalCartAmount,
    };

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};
