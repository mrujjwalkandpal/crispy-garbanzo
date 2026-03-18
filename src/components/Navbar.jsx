// Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
      <div className="navbar">
            <div className="left">
                    <h2>cravee&#x1f354;</h2>
                          </div>
                                <div className="search-con">
                                        <input type="text" name="searchquery" id="search" className="search-box" placeholder="what's on your mind..." />
                                              </div>

                                                    <nav className="right-side">
                                                            <button className="nav-item" aria-label="Switch to Vendor Mode">
                                                                      <span className="icon-placeholder">⇄</span>
                                                                                <span className="nav-label">Switch</span>
                                                                                        </button>
                                                                                                <a href="/profile" className="nav-item">
                                                                                                          <span id="profile" className="icon-placeholder">👤</span>
                                                                                                                                                                                                                                              </a>
                                                                                                                                    
                                                                                                                                                                        <button className="nav-item" aria-label="Notification">
                                                                                                                                                                                  <span id="notification" className="icon-placeholder">🔔</span>
                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                    </nav>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                          );
                                                                                                                                                                                                                          };

                                                                                                                                                                                                                          export default Navbar;