import React from 'react';
import HomeCarousel from './Carousel';
import './Welcome.css';
import 'animate.css';

const Welcome = () => {
  return (
    <div>
      <img className='animate__animated animate__fadeInDown' src={ require('../images/genlogo.png') } alt='Generous Logo' id='genLogo' />
      <HomeCarousel />
    </div>
  )
}

export default Welcome;