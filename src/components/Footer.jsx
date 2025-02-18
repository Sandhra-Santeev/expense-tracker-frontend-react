import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll"; 
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <div className="bg-dark py-2 mt-5">
      <Container className="text-center">
        {/* CTA Section */}
        <h4 className="fw-bold text-light mb-3 mt-5">Track Your Expenses with Ease!</h4>
        <Link to="/register" className="fw-bold mb-4 btn btn-warning">
          Get Started
        </Link>

        {/* Footer Sections */}
        <Row className="justify-content-center">
          {/* Quick Links */}
          <Col md={4} sm={6} className="mb-2">
            <h6 className="fw-bold text-light fs-5">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <ScrollLink
                  to="home"
                  smooth={true}
                  duration={500}
                  className="text-warning text-decoration-none fs-lg-5 "
                  style={{cursor:"pointer"}}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="about"
                  smooth={true}
                  duration={500}
                  className="text-warning text-decoration-none fs-lg-5 "
                  style={{cursor:"pointer"}}
                >
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="features"
                  smooth={true}
                  duration={500}
                  className="text-warning text-decoration-none fs-lg-5 "
                  style={{cursor:"pointer"}}
                >
                  Features
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="pricing"
                  smooth={true}
                  duration={500}
                  className="text-warning text-decoration-none fs-lg-5"
                  style={{cursor:"pointer"}}
                >
                  Pricing
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="text-warning text-decoration-none fs-lg-5"
                  style={{cursor:"pointer"}}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>
          </Col>

          {/* About */}
          <Col md={4} sm={6} className="mb-2">
            <h6 className="fw-bold text-light fs-5">About</h6>
            <p className="text-light">
              Manage expenses easily and get financial insights to stay on track.
            </p>
          </Col>

          {/* Social Media */}
          <Col md={4} sm={12} className="mb-2">
            <h6 className="fw-bold text-light fs-5">Follow Us</h6>
            <div style={styles.socialIcons}>
              <a href="#" className="text-warning fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-warning fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-warning fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-warning fs-5">
                <FaLinkedin />
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Copyright Section */}
      <div style={styles.copyright}>
        <p className="text-center m-0 text-light small">
          © 2025 YourApp. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

// Styles
const styles = {
  socialIcons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default Footer;
