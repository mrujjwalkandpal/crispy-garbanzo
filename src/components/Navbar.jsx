import React from 'react';

const Navbar = () => {
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

        <button className="nav-item">
          <span>⇄</span>
          <span className="nav-label">Switch</span>
        </button>

        <a href="/profile" className="nav-item">
          <span>👤</span>
        </a>

        <button className="nav-item">
          <span>🔔</span>
        </button>

      </nav>

    </div>
  );
};

export default Navbar;