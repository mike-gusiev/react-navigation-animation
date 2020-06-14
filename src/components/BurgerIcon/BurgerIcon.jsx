import React from 'react';

import './style.css';

const BurgerIcon = ({ onHandleMenu }) => (
  <div className="burger-icon-wrapper" onClick={onHandleMenu}>
    <div className="burger-icon-container">
      <div className="burger-icon__line" />
      <div className="burger-icon__line" />
      <div className="burger-icon__line" />
    </div>
  </div>
);

export default BurgerIcon;
