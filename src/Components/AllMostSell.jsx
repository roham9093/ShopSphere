import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../Styles/AllMostSell.css';
import { faBagShopping, faChevronDown, faFilter, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AllMostSell = () => {
  const location = useLocation();
  const { items } = location.state || {}; // دریافت داده‌های ارسال شده از MostSell

  const [isSortModalOpen, setSortModalOpen] = useState(false); // کنترل باز یا بسته بودن مدال مرتب‌سازی
  const [isFilterModalOpen, setFilterModalOpen] = useState(false); // کنترل باز یا بسته بودن مدال فیلتر
  const [sortedItems, setSortedItems] = useState(items || []); // مدیریت لیست مرتب‌شده
  const [selectedFilters, setSelectedFilters] = useState([]); // مدیریت فیلترهای انتخابی

  // تابع برای ایجاد ستاره‌ها
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={i <= rating ? "star filled" : "star"}
        />
      );
    }
    return stars;
  };

  // گزینه‌های دسته‌بندی
  const categories = [
    { label: 'Price: Low to High', value: 'priceLowHigh' },
    { label: 'Price: High to Low', value: 'priceHighLow' },
    { label: 'Rating: High to Low', value: 'ratingHighLow' },
    { label: 'Newest Arrivals', value: 'newest' },
  ];

  // گزینه‌های فیلتر
  const filters = [
    {
      category: "Brand",
      options: [
        { label: "Nike", value: "nike" },
        { label: "Adidas", value: "adidas" },
        { label: "Puma", value: "puma" },
        { label: "Under Armour", value: "under_armour" },
        { label: "Reebok", value: "reebok" },
      ],
    },
    {
      category: "Color",
      options: [
        { label: "Black", value: "black", hex: "#000000" },
        { label: "White", value: "white", hex: "#FFFFFF" },
        { label: "Red", value: "red", hex: "#FF0000" },
        { label: "Blue", value: "blue", hex: "#0000FF" },
        { label: "Green", value: "green", hex: "#008000" },
      ],
    },
    {
      category: "Size",
      options: [
        { label: "Small", value: "S" },
        { label: "Medium", value: "M" },
        { label: "Large", value: "L" },
        { label: "Extra Large", value: "XL" },
        { label: "XXL", value: "XXL" },
        { label: "XXXL", value: "XXXL" },
      ],
    },
    {
      category: "Category",
      options: [
        { label: "Sportswear", value: "sportswear" },
        { label: "Casual", value: "casual" },
        { label: "Formal", value: "formal" },
        { label: "Running", value: "running" },
        { label: "Outdoor", value: "outdoor" },
      ],
    },
  ];

  // تابع مرتب‌سازی
  const sortItems = (type) => {
    let sorted = [...sortedItems];
    switch (type) {
      case 'priceLowHigh':
        sorted = sorted.sort((a, b) => parseFloat(a.newPrice) - parseFloat(b.newPrice));
        break;
      case 'priceHighLow':
        sorted = sorted.sort((a, b) => parseFloat(b.newPrice) - parseFloat(a.newPrice));
        break;
      case 'ratingHighLow':
        sorted = sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        sorted = [...items];
        break;
      default:
        break;
    }
    setSortedItems(sorted);
    setSortModalOpen(false); // بستن مدال مرتب‌سازی پس از انتخاب
  };


  return (
    <div className='container'>
      <div className="main-all-most-sell">
        <div className="header-title">
          <div className="cat" onClick={() => setSortModalOpen(true)}>
            <p>Ordered By</p>
            <FontAwesomeIcon className='all-most-sell-icon' icon={faChevronDown} />
          </div>
          <div className="filter" onClick={() => setFilterModalOpen(true)}>
            <p>Filters</p>
            <FontAwesomeIcon className='all-most-sell-icon' icon={faFilter} />
          </div>
        </div>

        <div className="all-most-sell-cards">
          {sortedItems.map((item, index) => (
            <div key={index} className="all-most-sell-card">
              <div className="all-most-sell-image-container">
                <div className="all-most-sell-icon2">
                  <FontAwesomeIcon icon={faHeart} className=" all-most-sell-heart-icon" />
                  <FontAwesomeIcon icon={faBagShopping} className=" all-most-sell-bag-icon" />
                </div>
                <img src={item.image} alt={item.title} />
              </div>
              <div className="all-most-sell-card-content">
                <div className="all-most-sell-stars-container">
                  {renderStars(item.rating)} {/* نمایش ستاره‌ها */}
                </div>
                <h4>{item.title}</h4>
                <h5 className="all-most-sell-old-price">{item.oldPrice}</h5>
                <h4 className="all-most-sell-new-price">{item.newPrice}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* مدال مرتب‌سازی */}
      {isSortModalOpen && (
        <div className="sort-modal-overlay" onClick={() => setSortModalOpen(false)}>
          <div className="sort-modal-popup" onClick={(e) => e.stopPropagation()}>
            <h3 className="sort-modal-title">Sort Options</h3>
            <ul className="sort-options-list">
              {categories.map((category) => (
                <li
                  key={category.value}
                  className="sort-option-item"
                  onClick={() => sortItems(category.value)}
                >
                  {category.label}
                </li>
              ))}
            </ul>
          </div>
        </div>


      )}

      {/* مدال فیلتر */}
      {/* مدال فیلتر */}
{isFilterModalOpen && (
  <div className="modal-overlay" onClick={() => setFilterModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h3>Filter Options</h3>
      {filters.map((filterCategory, index) => (
        <div key={index} className="filter-category">
          <p>{filterCategory.category}</p> {/* عنوان دسته‌بندی */}
          <ul className="filter-options">
            {filterCategory.options.map((option) => (
              <li key={option.value} className="filter-item">
                {filterCategory.category === "Color" ? (
                  <div
                    className="color-circle"
                    style={{ backgroundColor: option.hex }}
                    title={option.label} // نمایش نام رنگ هنگام هاور
                  ></div>
                ) : (
                  <span>{option.label}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
)}

    </div>
  );
};

export default AllMostSell;
