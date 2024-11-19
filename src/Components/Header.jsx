import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons';
import "../Styles/Header.css";
import Menu from './Menu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // تابع برای باز و بسته کردن منو و مدیریت اسکرول صفحه
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);

        if (!isMenuOpen) {
            // جلوگیری از اسکرول صفحه
            
            document.body.style.overflow = 'hidden';
        } else {
            // فعال‌سازی اسکرول صفحه
            document.body.style.overflow = 'auto';
        }
    };

    return (
        <div className="fixed-header">
        <div className="container">
            <div className="header d-flex">
                <div className="bag-shop d-flex align-items-center">
                    <FontAwesomeIcon icon={faBagShopping} />
                    <span className="badge-style">0 تومان</span>
                </div>
                
                <div className="spacer"></div>
                
                <div className="menu d-flex justify-content-end" onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                    {isMenuOpen && <Menu isOpen={isMenuOpen} />} {/* نمایش منو در صورت باز بودن */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;
