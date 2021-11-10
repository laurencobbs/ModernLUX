import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>MODERN LUX 2021</h1>
      <p>The most luxurious rental homes of the year.</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Schedule A Tour
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          SEE VIRTUAL TOUR <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;