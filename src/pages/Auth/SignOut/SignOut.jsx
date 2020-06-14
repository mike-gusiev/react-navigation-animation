import React from 'react';
import PageHeader from '../../../components/PageHeader/PageHeader';
import './style.css';

const SignOut = ({ setMenuOpen, menuOpen }) => (
  <PageHeader setMenuOpen={setMenuOpen} menuOpen={menuOpen} label="signout" labelText="SIGN OUT" />
);

export default SignOut;
