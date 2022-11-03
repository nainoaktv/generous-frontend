import React, { useState } from 'react';
import HomeCarousel from './Carousel';
import './Welcome.css';

const Welcome = () => {
  return (
    <div>
      <img className='genLogo' src={ require('../images/genlogo.png').default } />
      <HomeCarousel />
    </div>
  )
}

export default Welcome;