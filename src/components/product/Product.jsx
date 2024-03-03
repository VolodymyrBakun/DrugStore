import React, { useContext } from 'react'
import "./Product.css"
import { ShopContext } from 'context/shop-context';

export const Product = ({ product }) => {
     const { addToCart, cartItems } = useContext(ShopContext);

    const cartAmount = cartItems[product.id]
    
  return (
    <div className="productEl">
      <img src={product.productImage} className='productImg' />
      <div className='description'>
              <h3>{product.productName}</h3>
              <p>{product.price} грн</p>
              <button className='productBtn' onClick={() => addToCart(product.id)}>Add to Cart{cartAmount > 0 && <> ({cartAmount})</>}</button>
      </div>
    </div>
  );
}
