import React, { useState } from "react";
import "../Styles/InterestList.css";

const InterestList = () => {
  const [items, setItems] = useState([]);

  return (
    <div className="interest-list-container">
      <h1 className="title">Your Favorite Items</h1>
      
      {items.length === 0 ? (
        <div className="empty-message">
          <p>Your wishlist is empty. Add some items to your favorites!</p>
        </div>
      ) : (
        <div className="interest-list">
          {items.map((item) => (
            <div key={item.id} className="interest-item">
              <img src={item.image} alt={item.title} className="item-image" />
              <div className="item-details">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-price">${item.price}</p>
              </div>
              <button className="remove-btn">Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default InterestList;
