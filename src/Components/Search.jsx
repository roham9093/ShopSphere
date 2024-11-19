import React, { useState } from "react";
import "../Styles/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="search-container">
    <div className="search-box">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products, categories, or brands..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-button" onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  
    {/* بخش تگ‌ها */}
    <div className="tags-container">
      <span className="tag">Men</span>
      <span className="tag">Women</span>
      <span className="tag">Sports</span>
      <span className="tag">Casual</span>
      <span className="tag">Outdoor</span>
    </div>
  
    <div className="banner-search">
      <div className="item-search">
        <p>Sports Gear</p>
        <img src="https://via.placeholder.com/150" alt="Sports Gear" />
      </div>
      <div className="item-search">
        <p>Casual Wear</p>
        <img src="https://via.placeholder.com/150" alt="Casual Wear" />
      </div>
      <div className="item-search">
        <p>Fitness Accessories</p>
        <img src="https://via.placeholder.com/150" alt="Fitness Accessories" />
      </div>
      <div className="item-search">
        <p>Outdoor Equipment</p>
        <img src="https://via.placeholder.com/150" alt="Outdoor Equipment" />
      </div>
      <div className="item-search">
        <p>Formal Attire</p>
        <img src="https://via.placeholder.com/150" alt="Formal Attire" />
      </div>
    </div>
  </div>
  
  );
};

export default Search;
