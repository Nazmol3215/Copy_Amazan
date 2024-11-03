import React from 'react';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
import Cart from './Cart';

function App() {
    return (
        <CartProvider>
            <div className="App">
                <h1>My E-commerce Store</h1>
                <ProductList />
                <Cart />
            </div>
        </CartProvider>
    );
}

export default App;
