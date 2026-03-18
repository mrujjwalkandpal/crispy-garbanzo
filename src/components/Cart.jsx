import React from 'react';

const Cart = ({ cart, increaseQty, decreaseQty, removeItem }) => {

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="c-rightt">
      <div className="c-title">your cart</div>

      {cart.length === 0 && <p>No items yet 😢</p>}


      {cart.map((item) => (
        <div className="cart-item-box" key={item.id}>
          
          <div className="item-details">
            <div className="c-item">{item.name}</div>
            <div className="price">₹{item.price}</div>

            <div className="q-c">
              <button 
                className="q-button"
                onClick={() => decreaseQty(item.id)}
              >
                -
              </button>

              <span className="qty">{item.qty}</span>

              <button 
                className="q-button"
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>
            </div>
          </div>

          <button 
            className="remove"
            onClick={() => removeItem(item.id)}
          >
            ✖
          </button>
        </div>
      ))}

      <div className="c-footer">
        <div className="cart-total">
          <span>total</span>
          <span className="total-price">₹{total}</span>
        </div>

        <button className="p-order">place order</button>
      </div>
    </div>
  );
};

export default Cart;