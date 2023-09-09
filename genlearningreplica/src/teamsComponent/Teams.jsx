import Carousel from 'react-bootstrap/Carousel';
import car1 from '../images/car1.png';
import './teams.css';

function Teams() {
  return (
    <>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="carimage"
          src={car1}
          alt="First slide"
        />
        <img
          className="carimage"
          src={car1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="carimage"
          src={car1}
          alt="First slide"
        />
        <img
          className="carimage"
          src={car1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="carimage"
          src={car1}
          alt="First slide"
        />
        <img
          className="carimage"
          src={car1}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>
    </>
    
  );
}

export default Teams;