import React from 'react';
import './Slider.css';  // CSS dosyasını import ediyoruz
import logo1 from './assets/logo1.png';
import logo2 from './assets/logo2.png';
import logo3 from './assets/logo3.png';
import logo4 from './assets/logo4.png';

const Slider = () => {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide"><img src={logo1} alt="logo1" /></div>
        <div className="slide"><img src={logo2} alt="logo2" /></div>
        <div className="slide"><img src={logo3} alt="logo3" /></div>
        <div className="slide"><img src={logo4} alt="logo4" /></div>
        <div className="slide"><img src={logo1} alt="logo1" /></div>
        <div className="slide"><img src={logo2} alt="logo2" /></div>
        <div className="slide"><img src={logo3} alt="logo3" /></div>
        <div className="slide"><img src={logo4} alt="logo4" /></div>
      </div>
    </div>
  );
};

export default Slider;
