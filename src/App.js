import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Components/Search';
import Profile from './Components/Profile';
import BagShop from './Components/BagShop';
import InterestList from './Components/InterestList';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ErrorPage from './Components/ErrorPage';
import AllMostSell from './Components/AllMostSell';
import "./App.css";
function App() {
  const [showFooter, setShowFooter] = useState(true);
  let lastScrollY = window.scrollY; // موقعیت اسکرول قبلی

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowFooter(false); // اسکرول به پایین
      } else {
        setShowFooter(true); // اسکرول به بالا
      }
      lastScrollY = currentScrollY; // بروزرسانی موقعیت اسکرول
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // حذف لیسنر در هنگام تخریب
  }, []);

  return (
    <div>
      <Router>
        <header>
          <Header />
        </header>
        <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/shopping-bag' element={<BagShop />} />
          <Route path='/interest-list' element={<InterestList />} />
          <Route path='/all-most-sell' element={<AllMostSell />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <footer
          className={showFooter ? 'footer visible' : 'footer hidden'} // اضافه‌کردن کلاس مناسب
        >
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
