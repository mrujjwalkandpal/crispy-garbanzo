import React from 'react';

const Navbar = ({ setSelectedVendor }) => {
  return (
    <div className="navbar">

      {/* LEFT LOGO */}
      <div className="left">
        <h2>cravee 🍔</h2>
      </div>

      {/* SEARCH */}
      <div className="search-con">
        <input
          type="text"
          className="search-box"
          placeholder="what's on your mind..."
        />
      </div>

      {/* RIGHT SECTION */}
      <nav className="right-side">

        {/* 🔥 Vendor Selector */}
        <select
          className="nav-item"
          onChange={(e) => setSelectedVendor(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Nescafe">Nescafe</option>
          <option value="Main Canteen">Main Canteen</option>
          <option value="Tuck Shop">Tuck Shop</option>
        </select>

        {/* PROFILE */}
        <span className="nav-item">👤</span>

        {/* NOTIFICATION */}
        <span className="nav-item">🔔</span>

      </nav>

    </div>
  );
};

export default Navbar;