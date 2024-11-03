import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

    return (
        <div>
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id}>
                            <h4>{item.name}</h4>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <button onClick={clearCart}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
