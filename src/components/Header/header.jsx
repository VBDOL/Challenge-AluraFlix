import React from 'react';
import './header.css';
import logo from '/src/assets/images/LogoMain.png';
import Button from '../Button/button';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="header-buttons">
        <Button to="/">Home</Button>
        <Button to="/novo-video">Novo Vídeo</Button>
      </div>
    </nav>
  );
};

export default Header;