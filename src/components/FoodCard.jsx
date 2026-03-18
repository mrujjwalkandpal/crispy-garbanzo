import React from 'react';

const FoodCard = ({ item, addToCart }) => {
  return (
      <div className="pro-food-card">
            <div className="card-image-box">
                    <img src={item.image} alt={item.name} className="pro-food-img" />
                          </div>

                                <div className="pro-card-info">
                                        <h3 className="pro-food-name">{item.name}</h3>
                                                <p className="pro-vendor">Sold by: {item.vendor}</p>

                                                        <div className="pro-card-footer">
                                                                  <div className="pro-price">₹{item.price}</div>

                                                                            <button 
                                                                                        className="pro-add-btn"
                                                                                                    onClick={() => addToCart(item)}
                                                                                                              >
                                                                                                                          ADD +
                                                                                                                                    </button>
                                                                                                                                            </div>
                                                                                                                                                  </div>
                                                                                                                                                      </div>
                                                                                                                                                        );
                                                                                                                                                        };

                                                                                                                                                        export default FoodCard;