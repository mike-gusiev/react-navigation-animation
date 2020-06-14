import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './style.css';

const Orders = ({ setMenuOpen, menuOpen }) => (
  <PageHeader
    setMenuOpen={setMenuOpen} menuOpen={menuOpen} label="orders"
    labelText="YOUR ORDERS"
  />
);

export default Orders;
