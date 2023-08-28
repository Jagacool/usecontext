// App.js
import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import CartPage from './CartPage';

const products = [
  { id: 1, name: 'Product 1', price: 10 },
  { id: 2, name: 'Product 2', price: 20 },
  // Add more products
];

function App() {
  return (
    <CartProvider>
      <div className="App">
        <ProductList products={products} />
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;
