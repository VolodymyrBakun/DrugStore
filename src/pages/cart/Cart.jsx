import { PRODUCTS } from 'products'
import React, { useContext } from 'react';
import { ShopContext } from 'context/shop-context';
import { CartItem } from 'pages/cartItem/CartItem';
import "./Cart.css"
import { useNavigate } from 'react-router-dom';


export const Cart = () => {
     const { cartItems, getTotalCartAmount } =
       useContext(ShopContext);

    const totalAmount = getTotalCartAmount().toFixed(2);
    
    const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cartTitle">
        <h2>Your Cart</h2>
      </div>
      <div className="cartItems">
        {PRODUCTS.map(product => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} key={product.id} />;
          }
            return <></>
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="Summ">
          <p>Загалом: {totalAmount} грн</p>
          <button className="cartSummBtn" onClick={() => navigate('/')}>
            Продовжити покупки
          </button>
        </div>
      ) : (
        <h1 className='Empty'>Ваша корзина пуста</h1>
      )}
    </div>
  );
}
