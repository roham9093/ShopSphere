import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faChevronRight, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import "../Styles/MostSell.css";
import { useNavigate } from 'react-router-dom';

const MostSell = () => {
  const [items, setItems] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const carouselRef = useRef(null);
  const startPosition = useRef(0);
  const scrollLeft = useRef(0);

  // دریافت داده از API خارجی
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); // URL مربوط به API
        const data = await response.json();
        const formattedData = data.map((product) => ({
          image: product.image,
          title: product.title,
          oldPrice: `${(product.price * 1.2).toFixed(2)} $`, // قیمت قدیمی 20% بیشتر
          newPrice: `${product.price.toFixed(2)} $`, // قیمت جدید
          rating: Math.round(product.rating.rate), // رتبه‌بندی
        }));
        setItems(formattedData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    carouselRef.current.classList.add('dragging');
    startPosition.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeft.current = carouselRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startPosition.current) * 2;
    carouselRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
    carouselRef.current.classList.remove('dragging');
  };

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

  const navigate = useNavigate();

  const handleShowAll = () => {
    navigate('/all-most-sell', { state: { items } }); // ارسال داده‌ها به AllMostSell
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel-header">
        <h2 className="carousel-title">Best Sellers</h2>
        <h1 className="show-all" onClick={handleShowAll}>
          Show all
          <FontAwesomeIcon icon={faChevronRight} />
        </h1>
      </div>
      <div
        className="carousel-container"
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        <div className="carousel">
          {items.map((item, index) => (
            <div key={index} className="card no-select">
              <div className="image-container">
                <FontAwesomeIcon icon={faHeart} className="icon heart-icon" />
                <FontAwesomeIcon icon={faBagShopping} className="icon bag-icon" />
                <img src={item.image} alt="the most sell" />
              </div>
              <div className="card-content">
                <div className="stars-container">
                  {renderStars(item.rating)} {/* نمایش ستاره‌ها */}
                </div>
                <h4>{item.title}</h4>
                <h5 className="old-price">{item.oldPrice}</h5>
                <h4 className="new-price">{item.newPrice}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostSell;
