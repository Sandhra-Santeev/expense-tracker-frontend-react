import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About = () => {
  return (
    <div className="about-section py-3 text-grey"  id="about">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Image */}
          <Col md={6} className="text-center mb-4 mb-md-0">
            <Image 
              src="https://img.freepik.com/free-vector/progress-overview-concept-illustration_114360-7184.jpg" 
              alt="About Casha" 
              fluid 
              rounded 
              className="w-75"
            />
          </Col>
          
          {/* Right Side: Text */}
          <Col md={6}>
            <h2 className="fw-bold mb-3 ">About <span style={{ color: "#ffc107"}}>Casha</span></h2>
            <p className="mb-3 fs-5">
              Casha is a <b>simple yet powerful finance tracker</b> that helps you monitor your expenses,  
              set budgets, and take control of your financial health.
            </p>
            <p className="fs-5">
              Whether you're tracking daily spending or planning for the future, Casha provides a <b>clear  
              and organized way to manage your money</b>. With visual insights and easy-to-use tools,  
              staying on top of your finances has never been easier.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default About;
