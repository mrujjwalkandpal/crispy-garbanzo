import React, { useState } from 'react';

const Navbar = ({ setSelectedVendor }) => {

  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="navbar">

      {/* LEFT */}
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

      {/* RIGHT */}
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

        {/* PROFILE BUTTON */}
        <div className="profile-container">
          <span
            className="nav-item"
            onClick={() => setShowProfile(!showProfile)}
            style={{ cursor: "pointer" }}
          >
            👤
          </span>

          {/* 🔥 PROFILE POPUP */}
          {showProfile && (
            <div className="profile-box">
              <p><strong>Name:</strong> Ujjwal</p>
              <p><strong>Course:</strong> BTech CSE</p>
            </div>
          )}
        </div>

        {/* NOTIFICATION */}
        <span className="nav-item">🔔</span>

      </nav>

    </div>
  );
};

export default Navbar;