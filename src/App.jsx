import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FoodCard from './components/FoodCard';
import Cart from './components/Cart';
import { foodData } from './data/data';
import './style.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState("All");

  // 🔥 LOAD USER FROM localStorage
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const filteredFood =
    selectedVendor === "All"
      ? foodData
      : foodData.filter(item => item.vendor === selectedVendor);

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);

    if (existing) {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map(i =>
      i.id === id ? { ...i, qty: i.qty + 1 } : i
    ));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map(i =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter(i => i.qty > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter(i => i.id !== id));
  };

  return (
    <div className="main">

      <Navbar 
        setSelectedVendor={setSelectedVendor}
        user={user}
        setUser={setUser}
      />

      <div className="contentt">

        <div className="c-leftt">
          <div className="menu-header">
            <h2 className="menu-title">Explore menu</h2>
            <p className="menu-sub">what's on your mind</p>
          </div>

          <div className="food-grid">
            {filteredFood.map((item) => (
              <FoodCard 
                key={item.id} 
                item={item} 
                addToCart={addToCart} 
              />
            ))}
          </div>
        </div>

        <Cart
          cart={cart}
          user={user}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeItem={removeItem}
        />

      </div>
    </div>
  );
};

export default App;