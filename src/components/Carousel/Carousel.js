import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';
import { useNavigate } from 'react-router-dom';
import gato1 from './fotos/gato1.jpeg';
import perro2 from './fotos/perro2.jpg';
import perro1 from './fotos/perro1.webp';

function PhotoCarousel() {
  const navigate = useNavigate();

  const handleAdoptClick = () => {
    navigate('/formulario');
  };

  return (
    <div className="carousel-wrapper">
      <h2 className="carousel-title">Urgentes</h2>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={perro2}
            alt="First slide"
          />
          <Carousel.Caption className="custom-caption">
            <h3>Max</h3>
            <p>Max, un amigo leal que nunca te abandonará</p>
            <button className="btn btn-primary" onClick={handleAdoptClick}>Adopta</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={gato1}
            alt="Second slide"
          />
          <Carousel.Caption className="custom-caption">
            <h3>Sim</h3>
            <p>Simba, un felino noble y curioso que conquistará tu corazón con su cariño.</p>
            <button className="btn btn-primary" onClick={handleAdoptClick}>Adopta</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src={perro1}
            alt="Third slide"
          />
          <Carousel.Caption className="custom-caption">
            <h3>Luna</h3>
            <p>Luna, una compañera fiel que iluminará tu vida con su energía.</p>
            <button className="btn btn-primary" onClick={handleAdoptClick}>Adopta</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PhotoCarousel;
