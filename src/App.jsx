import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FoodCard from './components/FoodCard';
import Cart from './components/Cart';
import { foodData } from './data/data';
import './style.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [selectedVendor, setSelectedVendor] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // 🔥 NEW
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  // 🔥 FILTER (vendor + search)
  const filteredFood = foodData.filter(item => {
    const matchVendor =
      selectedVendor === "All" || item.vendor === selectedVendor;

    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase());

    return matchVendor && matchSearch;
  });

  const addToCart = (item) => {

  //vendor restrictions 
if (cart.length > 0 && cart[0].vendor !== item.vendor) {
  const confirmClear = window.confirm(
    "Your cart contains items from another vendor. Clear cart and add this item?"
  );

  if (confirmClear) {
    setCart([{ ...item, qty: 1 }]);
  }

  return;
}
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
        setSearchQuery={setSearchQuery} // 🔥 PASS
        user={user}
        setUser={setUser}
      />

      <div className="contentt">

        <div className="c-leftt">
          <div className="menu-header">
            <h2 className="menu-title">Explore menu</h2>
            <p className="menu-sub">Find the best dishes</p>
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