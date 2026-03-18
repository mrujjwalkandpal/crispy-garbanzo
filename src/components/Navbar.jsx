import React, { useState } from 'react';

const Navbar = ({ setSelectedVendor, user }) => {

  const [showProfile, setShowProfile] = useState(false);

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

        {/* Vendor */}
        <select
          className="nav-item"
          onChange={(e) => setSelectedVendor(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Nescafe">Nescafe</option>
          <option value="Main Canteen">Main Canteen</option>
          <option value="Tuck Shop">Tuck Shop</option>
        </select>

        {/* USER */}
        {user ? (
          <div className="profile-container">
            <span
              className="nav-item"
              onClick={() => setShowProfile(!showProfile)}
            >
              👤
            </span>

            {showProfile && (
              <div className="profile-box">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Course:</strong> {user.course}</p>
              </div>
            )}
          </div>
        ) : (
          <button className="nav-item login-btn">
            Login
          </button>
        )}

        <span className="nav-item">🔔</span>

      </nav>
    </div>
  );
};

export default Navbar;