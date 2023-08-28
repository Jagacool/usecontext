// CartPage.js
import React from 'react';
import { useCart } from './CartContext';
import CartItem from './CartItem';

const CartPage = () => {
  const { cart } = useCart();

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount}</p>
    </div>
  );
};

export default CartPage;
