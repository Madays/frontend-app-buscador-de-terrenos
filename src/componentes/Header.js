import React from 'react';
import '../style/Header.css';
import logo from '../imagenes/logo.svg';

function Header() {
  return (
    <header className='nkn-py-medium nkn-px-large'>
      <img src={logo} alt='Logo de la aplicación nuestra tierra'/>
    </header>
  );
}

export default Header;
