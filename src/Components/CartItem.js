// CartItem.js
import React from 'react';
import { useCart } from './CartContext';

const CartItem = ({ item }) => {
  const { dispatch } = useCart();

  return (
    <div>
      <p>{item.name} - ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT_QUANTITY', payload: item.id })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT_QUANTITY', payload: item.id })}>-</button>
      <button onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}>Remove</button>
    </div>
  );
};

export default CartItem;
