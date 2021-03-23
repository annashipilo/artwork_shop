import React from 'react';
import Logo from './Logo/Logo';
import Cart from './Cart/Cart';
import './style.css'

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Cart />
    </div>
  );
}

export default Header;