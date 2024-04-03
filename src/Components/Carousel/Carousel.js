import React, { useState, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import I1 from '../Images/6494754eb90e8d5d5024bca9_64118867675e5bbd2ee0a1bd_Dashboard 1.webp';
import I2 from './ce394220470f480b80881cb177a9c2a4.jpg';
import I3 from './cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAxL3Jhd3BpeGVsX29mZmljZV8zNV9maW5hbmNlX2FuZF9tb25leV90ZWNobm9sb2d5X2dyYXBoX2JhY2tncm91bl9iOWMxYTBmMC1iNGZjLTQ1M2YtYmM5OC02YTc1MmUwNDY2ZjZfMS5qcGc.webp';  

const CarouselComponent = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container w-75'>
      <Carousel ref={carouselRef} activeIndex={index} onSelect={handleSelect} interval={900} style={{ paddingTop: '50px' }}>
        <Carousel.Item>
          <img
          id='margin_auto'
            className="d-block w-100"
            src={I1}
            alt="First slide"
            style={{ height: '70vh', width: '50vw !important' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
           src={I2}
            alt="Second slide"
            style={{ height: '70vh', width: '50vw !important' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={I3}
            alt="Third slide"
           style={{ height: '70vh', width: '50vw !important' }}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
