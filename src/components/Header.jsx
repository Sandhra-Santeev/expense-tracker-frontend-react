import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top">
      <Container>
        <Navbar.Brand href="/" className="fs-3 fw-bold"><img src="https://cdn-icons-png.flaticon.com/512/9905/9905540.png" alt="logo" style={{ width: "2rem" }} className="me-2" />Casha</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="me-2">Home</Nav.Link>
            <Nav.Link href="#about" className="me-2">About Us</Nav.Link>
            <Nav.Link href="#features" className="me-2">Features</Nav.Link>
            <Nav.Link href="#pricing" className="me-2">Pricing</Nav.Link>
            <Nav.Link href="#contact" className="me-2">Contact</Nav.Link>
            <div className="d-flex">
              <Link to={'/login'}>
                <Button variant="outline-light" className="me-2">
                  Login
                </Button>
              </Link>
              <Link to={'/register'}>
                <Button variant="primary"  >
                  Register
                </Button>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
