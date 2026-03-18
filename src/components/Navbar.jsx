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
                                                                                <span className="nav-label">Vendor Switch</span>
                                                                                        </button>
                                                                                                <a href="/profile" className="nav-item">
                                                                                                          <span className="icon-placeholder">⚙️</span>
                                                                                                                    <span className="nav-label">Profile</span>
                                                                                                                            </a>
                                                                                                                                    <a href="/cart" className="nav-item">
                                                                                                                                              <span className="icon-placeholder">🛒</span>
                                                                                                                                                        <span className="nav-label">Cart</span>
                                                                                                                                                                </a>
                                                                                                                                                                        <button className="nav-item" aria-label="Notification">
                                                                                                                                                                                  <span className="icon-placeholder">&#x1F514;</span>
                                                                                                                                                                                            <span className="nav-label">Notification</span>
                                                                                                                                                                                                      <span className="badge">3</span>
                                                                                                                                                                                                              </button>
                                                                                                                                                                                                                    </nav>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                          );
                                                                                                                                                                                                                          };

                                                                                                                                                                                                                          export default Navbar;