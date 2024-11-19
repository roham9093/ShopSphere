import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Styles/Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart, faHouse, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="container">
            <nav className='nav'>
                <NavLink className="item" to="/">
                <FontAwesomeIcon icon={faHouse} />
                </NavLink>
                <NavLink className="item" to="/search">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                </NavLink>
                <NavLink className="item" to="/interest-list">
                <FontAwesomeIcon icon={faHeart} />
                </NavLink>
                <NavLink className="item" to="/shopping-bag">
                <FontAwesomeIcon icon={faBagShopping} />
                </NavLink>
                <NavLink className="item" to="/profile">
                <FontAwesomeIcon icon={faUser} />
                </NavLink>
            </nav>
        </div>
    )
}

export default Footer