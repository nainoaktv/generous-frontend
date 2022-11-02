import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';



function HomeCarousel() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item>
        <img
          className="d-block"
          // Adjust image size to fit Carousel
          // Other styling in CSS file
          style={{height: 'auto', width: '100%',}}
          // Must use { require('logo route').default } to display image in browser 
          src={ require('../images/miniaussie.jpeg').default }
          alt="First slide"
        />
        <Carousel.Caption className="carouselText">
          <h3>Welcome to Generous</h3>
          <p>Some filler text</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 'auto', width: '100%',}}
          src={ require('../images/miniaussie.jpeg').default }
          alt="Second slide"
        />

        <Carousel.Caption className="carouselText">
          <h3>Donate</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          style={{height: 'auto', width: '100%',}}
          src={ require('../images/miniaussie.jpeg').default }
          alt="Third slide"
        />

        <Carousel.Caption className="carouselText">
          <h3>Search for local Charities</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel; 