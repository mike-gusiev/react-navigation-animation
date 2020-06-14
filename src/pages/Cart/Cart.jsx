import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './style.css';

const Cart = ({ setMenuOpen, menuOpen }) => (
  <PageHeader setMenuOpen={setMenuOpen} menuOpen={menuOpen} label="cart" labelText="YOUR CART" />
);

export default Cart;
