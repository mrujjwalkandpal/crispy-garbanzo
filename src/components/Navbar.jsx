import React from 'react';
import { User, Bell, Repeat, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="navbar">
      
      <div className="left">
        <h2>cravee 🍔</h2>
      </div>

      <div className="search-con">
        <div className="search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            className="search-box"
            placeholder="what's on your mind..."
          />
        </div>
      </div>

      <nav className="right-side">
        
        <button className="nav-item">
          <Repeat size={20} />
          <span className="nav-label">Switch</span>
        </button>

        <a href="/profile" className="nav-item">
          <User size={20} />
        </a>

        <button className="nav-item">
          <Bell size={20} />
        </button>

      </nav>
    </div>
  );
};

export default Navbar;
