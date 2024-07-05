import React from 'react';
import './slider.css';

const Slider = ({ teste, color, children }) => {
  return (
    <div className="slider-container">
      <div><h3 className="slider-title" style={{ backgroundColor: color }}>{teste}</h3></div>
      <div className="slider">
        {children}
      </div>
    </div>
  );
};

export default Slider;