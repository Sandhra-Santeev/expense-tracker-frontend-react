import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section text-center text-white d-flex align-items-center bg-dark" style={styles.hero}  id="home" >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h1 className="fw-bold">Take Control of Your Finances with <span style={{ color: "#ffc107" }}>Casha</span></h1>
            <p className="lead mt-3">
              Track your expenses, set budgets, and manage your money effortlessly.  
              Smart finance tracking, made simple.
            </p>
            <div className="mt-4">
             <Link to={'/register'}>
                <Button variant="warning" size="lg" className="me-3">
                  Get Started
                </Button>
             </Link>
              <Button variant="outline-light" size="lg">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const styles = {
  hero: {
    minHeight: "60vh",
    display: "flex",
    justifyContent: "center",
    padding: "60px 0",
   
  }
};

export default Hero;
