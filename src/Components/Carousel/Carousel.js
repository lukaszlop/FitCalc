import React, {useState} from 'react';
import './Carousel.scss';
import '../Container/Container.scss';
import CarouselImages from './Carousel_images/CarouselImages';
import i1 from '../../assets/meat.jpg';
import i2 from '../../assets/nuts.jpg';
import i3 from '../../assets/eggs.jpg';
import i4 from '../../assets/rice.jpg';
import i5 from '../../assets/vegetables.jpg';
import i6 from '../../assets/fruits.jpg';

const Carousel = () => {

    let carouselArr = [
        <CarouselImages src={i1} />,
        <CarouselImages src={i2} />,
        <CarouselImages src={i3} />,
        <CarouselImages src={i4} />,
        <CarouselImages src={i5} />,
        <CarouselImages src={i6} />,
    ];
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (carouselArr.length - 1)) : setX(x + 100);
    }

    const goRight = () => {
        x === -100 * (carouselArr.length - 1) ? setX(0) : setX(x - 100);
    }

  return (
    <section className="carousel-wrapper">
      <div className="container">
        <div className="carousel">
          {carouselArr.map((item, index) => {
              return (
                  <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                      {item}
                  </div>
              )
          })}
          <button className="carousel-btn carousel-btn__left" onClick={goLeft}><i class="fas fa-chevron-left carousel-btn__icon"></i></button>
          <button className="carousel-btn carousel-btn__right" onClick={goRight}><i class="fas fa-chevron-right carousel-btn__icon"></i></button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
