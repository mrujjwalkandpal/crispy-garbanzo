import React, { useState } from 'react';

const Navbar = ({ setSelectedVendor, user, setUser }) => {

  const [showProfile, setShowProfile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  // 🔥 HANDLE LOGIN
  const handleLogin = () => {
    if (!name || !course) {
      alert("Fill all fields");
      return;
    }

    setUser({ name, course });
    setShowLogin(false);
  };

  // 🔥 LOGOUT
  const handleLogout = () => {
    setUser(null);
    setShowProfile(false);
  };

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

                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="nav-item login-btn"
            onClick={() => setShowLogin(true)}
          >
            Login
          </button>
        )}

        <span className="nav-item">🔔</span>

      </nav>

      {/* 🔥 LOGIN MODAL */}
      {showLogin && (
        <div className="login-modal">
          <div className="login-box">
            <h3>Login</h3>

            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Enter Course"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
            />

            <button onClick={handleLogin}>Submit</button>

            <button onClick={() => setShowLogin(false)}>Cancel</button>
          </div>
        </div>
      )}

    </div>
  );
};

export default Navbar;