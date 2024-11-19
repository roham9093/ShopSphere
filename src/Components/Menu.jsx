import React from 'react';
import '../Styles/Menu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

const Menu = ({ isOpen }) => {
  return (
    <div className={`${isOpen ? 'back-filter' : ''}`}>
    <div className={`menu-container ${isOpen ? 'open' : ''}`}>
      <div className="menu-title">Contact with Us</div>
      <div className="menu-item">
      <FontAwesomeIcon icon={faLocationDot} />
        <p>Iran, Tehran, District 30, Tehran Street, No. 100</p>
      </div>
      <div className="menu-item">
      <FontAwesomeIcon icon={faEnvelope} /> 
      <p>sajjadkarimi766@gmail.com</p>
      <p>karimisajjad@gmail.com</p>
        </div>
      <div className="menu-item">
      <FontAwesomeIcon icon={faPhone} />
        <p>09213653039</p>
        <p>09203653039</p>
        </div>
    </div>
    </div>
  );
};

export default Menu;
