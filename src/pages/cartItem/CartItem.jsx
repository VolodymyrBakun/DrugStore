import React, { useContext } from 'react';
import { ShopContext } from 'context/shop-context';


export const CartItem = ({ data }) => {

     const { addToCart, cartItems, removeFromCart } = useContext(ShopContext);


  return (
    <div>
      <img src={data.productImage} />
      <div className="cartDescription">
        <h3>{data.productName}</h3>
        <p>{data.price} грн</p>
        <div>
          <button onClick={() => removeFromCart(data.id)}>-</button>
          <input value={cartItems[data.id]} />
          <button onClick={() => addToCart(data.id)}>+</button>
        </div>
      </div>
    </div>
  );
}
