import React from 'react';
import BurgerIcon from '../../components/BurgerIcon/BurgerIcon';

import './style.css';

const SignOut = ({ setMenuOpen, menuOpen, label, labelText }) => {

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  return (
    <div className={[`${label}-wrapper`, !menuOpen ? 'page-active page-in' : 'page-out'].join(' ')}>
      <div className={`${label}-title`}>
        <BurgerIcon onHandleMenu={handleOpenMenu} />
        <span className={`${label}-title__header`}>{labelText}</span>
      </div>
    </div>
  );
};

export default SignOut;
