import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import SignIn from '../signinComponent/SignIn';

function NavbarEx() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
        <Image src="https://test.gen3learning.com/static/media/Gen3HomeLogo.ff67efacc32d73958274fd251dbdf8fd.svg" rounded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About Us</Nav.Link>
            <Nav.Link href="#pricing">Contact Us</Nav.Link>
            <Nav.Link href="#pricing">Programs</Nav.Link>
            <Nav.Link href="#pricing">More</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Free Trial</Nav.Link>
            <SignIn/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarEx;