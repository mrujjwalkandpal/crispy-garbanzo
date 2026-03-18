// Cart.jsx
import React from 'react';

const Cart = () => {
  return (
      <div className="c-rightt">
            <div className="c-title">your cart</div>
                  
                        <div className="cart-item-box">
                                <div className="item-details">
                                          <div className="c-item">cold coffee</div>
                                                    <div className="price">₹60</div>
                                                              <div className="q-c">
                                                                          <button className="q-button">-</button>
                                                                                      <span className="qty">1</span>
                                                                                                  <button className="q-button">+</button>
                                                                                                            </div>
                                                                                                                    </div>
                                                                                                                            <button className="remove">&#x2716;</button>
                                                                                                                                  </div>
                                                                                                                                        
                                                                                                                                              <div className="c-footer">
                                                                                                                                                      <div className="cart-total">
                                                                                                                                                                <span>total</span>
                                                                                                                                                                          <span className="total-price">₹60</span>
                                                                                                                                                                                  </div>
                                                                                                                                                                                          <button className="p-order">place order</button>
                                                                                                                                                                                                </div>
                                                                                                                                                                                                    </div>
                                                                                                                                                                                                      );
                                                                                                                                                                                                      };

                                                                                                                                                                                                      export default Cart;