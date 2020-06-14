import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './style.css';

const Favorites = ({ setMenuOpen, menuOpen }) => (
  <PageHeader
    setMenuOpen={setMenuOpen} menuOpen={menuOpen} label="favorites"
    labelText="FAVORITES"
  />
);

export default Favorites;
