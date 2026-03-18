import React, { useState } from 'react';
import Navbar from './Navbar';
import FoodCard from './FoodCard';
import Cart from './Cart';
import { foodData } from './data';
import './style.css';

const App = () => {
    const [cart, setCart] = useState([]);

    // ADD TO CART
    const addToCart = (item) => {
        const existing = cart.find((i) => i.id === item.id);

        if (existing) {
            setCart(
                cart.map((i) =>
                    i.id === item.id ? { ...i, qty: i.qty + 1 } : i
                )
            );
        } else {
            setCart([...cart, { ...item, qty: 1 }]);
        }
    };

    // INCREASE
    const increaseQty = (id) => {
        setCart(
            cart.map((i) =>
                i.id === id ? { ...i, qty: i.qty + 1 } : i
            )
        );
    };

    // DECREASE
    const decreaseQty = (id) => {
        setCart(
            cart
                .map((i) =>
                    i.id === id ? { ...i, qty: i.qty - 1 } : i
                )
                .filter((i) => i.qty > 0)
        );
    };

    // REMOVE
    const removeItem = (id) => {
        setCart(cart.filter((i) => i.id !== id));
    };

    return (
        <div className="main">
            <Navbar />

            <div className="contentt">
                <div className="c-leftt">
                    <div className="menu-header">
                        <h2 className="menu-title">Explore menu</h2>
                        <p className="menu-sub">what's on your mind</p>
                    </div>

                    <div className="food-grid">
                        {foodData.map((item) => (
                            <FoodCard key={item.id} item={item} addToCart={addToCart} />
                        ))}
                    </div>
                </div>

                <Cart
                    cart={cart}
                    increaseQty={increaseQty}
                    decreaseQty={decreaseQty}
                    removeItem={removeItem}
                />
            </div>
        </div>
    );
};

export default App;