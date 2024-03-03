import { PRODUCTS } from 'products'
import React, { useContext } from 'react';
import { ShopContext } from 'context/shop-context';
import { CartItem } from 'pages/cartItem/CartItem';


export const Cart = () => {
     const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);


  return (
      <div className='cart'>
          <div>
              <h2>Your Cart Item</h2>
          </div>
          <div className='cartItems'>
              {PRODUCTS.map((product) => {
                  if (cartItems[product.id] !== 0) {
                      return <CartItem data={product} key={product.id} />
               }   
              })}
          </div>
    </div>
  )
}
