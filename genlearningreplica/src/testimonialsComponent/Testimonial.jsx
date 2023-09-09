import Carousel from 'react-bootstrap/Carousel';
import car1 from '../images/car1.png';
import './testimonial.css';
import Button from 'react-bootstrap/Button';

function Testimonial() {
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
     <Button variant="outline-warning" className='register button1' onClick={(e)=>alert('clicked')}>Register Now</Button>{' '}
    </>
    
  );
}

export default Testimonial;