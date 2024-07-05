import React from 'react';
import './button.css';
import { Link } from 'react-router-dom';

const Button = ({ children, to, onClick }) => {
  return (
    <Link to={to} className="header-button" onClick={onClick}>
      {children}
    </Link>
  );
};

export default Button;