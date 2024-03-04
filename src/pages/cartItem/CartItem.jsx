import React, { useContext } from 'react';
import { ShopContext } from 'context/shop-context';
import './CartItem.css';

export const CartItem = ({ data }) => {
  const { addToCart, cartItems, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <div className="cartImg">
        <img className="img" alt="Drugs" src={data.productImage} />
      </div>
      <div className="cartDescription">
        <h3>{data.productName}</h3>
        <p>{data.price} грн</p>
        <div>
          <button onClick={() => removeFromCart(data.id)}>-</button>
          <input
            className="cartInput"
            value={cartItems[data.id]}
            onChange={e => updateCartItemCount(Number(e.target.value), data.id)}
          />
          <button onClick={() => addToCart(data.id)}>+</button>
        </div>
      </div>
    </div>
  );
};
