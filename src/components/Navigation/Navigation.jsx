import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

import './style.css';

const Navigation = ({ setMenuOpen, menuOpen }) => {

  const handleOpenMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={['navigation-wrapper', !menuOpen ? 'page-disable' : ''].join(' ')}>
      <span className="navigation-user-name">Viktor</span>
      <div className="navigation-menu">
        {routes.map(({ name, link }) => {
          if (link === '/orders') {
            return (
              <>
                <NavLink
                  activeClassName="navigation-menu__item--active"
                  key={link} className={['navigation-menu__item', link.substring(1)].join(' ')} to={link}
                  onClick={handleOpenMenu}
                >
                  {name}
                </NavLink>
                <div className="navigation-menu__separator" />
              </>
            );
          } else {
            return (
              <NavLink
                activeClassName="navigation-menu__item--active"
                key={link} className={['navigation-menu__item', link.substring(1)].join(' ')} to={link}
                onClick={handleOpenMenu}
              >
                {name}
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Navigation;
