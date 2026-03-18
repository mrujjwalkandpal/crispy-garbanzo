import React from 'react';

const Navbar = ({ setSelectedVendor }) => {
  return (
    <div className="navbar">

      <div className="left">
        <h2>cravee 🍔</h2>
      </div>

      <div className="search-con">
        <input
          type="text"
          className="search-box"
          placeholder="what's on your mind..."
        />
      </div>

      <nav className="right-side">

        {/* 🔥 Vendor Dropdown */}
        <select
          className="nav-item"
          onChange={(e) => setSelectedVendor(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Food Plaza">Food Plaza</option>
          <option value="Domino's">Domino's</option>
          <option value="Cafe">Cafe</option>
          <option value="Subway">Subway</option>
          <option value="Italian Hub">Italian Hub</option>
          <option value="Snack Corner">Snack Corner</option>
          <option value="Street Bites">Street Bites</option>
        </select>

        <span className="nav-item">👤</span>
        <span className="nav-item">🔔</span>

      </nav>
    </div>
  );
};

export default Navbar;