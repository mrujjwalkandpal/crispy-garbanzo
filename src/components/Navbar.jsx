import React, { useState } from 'react';

const Navbar = ({ setSelectedVendor, setSearchQuery, user, setUser }) => {

  const [showProfile, setShowProfile] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const handleLogin = () => {
    if (!name || !course) {
      alert("Fill all fields");
      return;
    }

    const userData = { name, course };

    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));

    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setShowProfile(false);
  };

  return (
    <div className="navbar">

      <div className="left">
        <h2>cravee 🍔</h2>
      </div>

      {/* 🔥 SEARCH WORKING */}
      <div className="search-con">
        <input
          type="text"
          className="search-box"
          placeholder="Search food..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <nav className="right-side">

        <select
          className="nav-item"
          onChange={(e) => setSelectedVendor(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Nescafe">Nescafe</option>
          <option value="Main Canteen">Main Canteen</option>
          <option value="Tuck Shop">Tuck Shop</option>
        </select>

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

      </nav>

      {/* LOGIN MODAL (unchanged) */}
      {showLogin && (
        <div className="login-modal">
          <div className="login-box">
            <h3>Welcome Back 👋</h3>

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