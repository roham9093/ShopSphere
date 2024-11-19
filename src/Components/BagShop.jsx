import React, { useState } from "react";
import "../Styles/BagShop.css";

const BagShop = () => {
  const [cartItems, setCartItems] = useState([]);

  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map((item) => 
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const applyDiscount = () => {
    if (discountCode === "SAVE10") {
      setDiscountApplied(true);
    } else {
      alert("Invalid discount code");
    }
  };

  const getFinalPrice = () => {
    const total = parseFloat(calculateTotal());
    return discountApplied ? (total * 0.9).toFixed(2) : total.toFixed(2); // 10% discount
  };

  return (
    <div className="bag-shop-container">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <p>Add some items to your cart to start shopping!</p>
        </div>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="product-image"/>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="price">Price: ${item.price}</p>
                <div className="quantity">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <button className="remove-item" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <>
          <div className="discount-code">
            <input
              type="text"
              placeholder="Enter Discount Code"
              value={discountCode}
              onChange={(e) => setDiscountCode(e.target.value)}
            />
            <button onClick={applyDiscount}>Apply Discount</button>
          </div>

          <div className="cart-summary">
            <div className="summary-details">
              <div className="summary-item">
                <p>Subtotal</p>
                <p>${calculateTotal()}</p>
              </div>
              {discountApplied && (
                <div className="summary-item">
                  <p>Discount (10%)</p>
                  <p>-${(calculateTotal() * 0.1).toFixed(2)}</p>
                </div>
              )}
              <div className="summary-item total">
                <p>Total</p>
                <p>${getFinalPrice()}</p>
              </div>
            </div>
            <button className="checkout-button">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default BagShop;
