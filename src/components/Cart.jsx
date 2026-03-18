import React, { useState } from 'react';

const Cart = ({ cart, user, increaseQty, decreaseQty, removeItem }) => {

  const [showToast, setShowToast] = useState(false);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleOrder = () => {
    if (!user) {
      alert("Please login first!");
      return;
    }

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  };

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
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span className="qty">{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>
          </div>

          <button className="remove" onClick={() => removeItem(item.id)}>
            ✖
          </button>
        </div>
      ))}

      <div className="c-footer">
        <div className="cart-total">
          <span>total</span>
          <span>₹{total}</span>
        </div>

        <button className="p-order" onClick={handleOrder}>
          place order
        </button>
      </div>

      {/* 🔥 TOAST */}
      {showToast && (
        <div className="toast">
          ✅ Order placed successfully!
        </div>
      )}
    </div>
  );
};

export default Cart;