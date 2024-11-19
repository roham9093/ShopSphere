import React from 'react';
import "../Styles/Banner.css";  // لینک به فایل استایل
import bannerImage from "../Assets/banner.png"; // آدرس تصویر

const Banner = () => {
  return (
    <div className="banner-container">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-content">
        <h1>Take 50% Off now!</h1>
        <button className="shop-now-btn">Shop Now</button>
      </div>
    </div>
  )
}

export default Banner;
