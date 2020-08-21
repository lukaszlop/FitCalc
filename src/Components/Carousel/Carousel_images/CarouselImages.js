import React from 'react';
import './CarouselImages.scss';


const CarouselImages = ({src}) => {
    return <img className="carousel-img" src={src} alt="Slider image"/>
}

export default CarouselImages;