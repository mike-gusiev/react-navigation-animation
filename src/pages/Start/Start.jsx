import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import './style.css';

const Start = ({ setMenuOpen, menuOpen }) => (
  <PageHeader setMenuOpen={setMenuOpen} menuOpen={menuOpen} label="start" labelText="START" />
);

export default Start;
