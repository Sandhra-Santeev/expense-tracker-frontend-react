import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="contact-section py-3  mt-5" style={styles.contact} id="contact">
      <Container>
        <Row className="align-items-center">
          {/* Contact Form */}
          <Col md={6}>
            <Card style={styles.card} className="bg-primary ">
              <Card.Body>
                <h3 className="text-center text-white  fw-bold mb-4">Contact Us</h3>
                <Form>
                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" style={styles.input} required />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" style={styles.input} required />
                  </Form.Group>

                  <Form.Group className="mb-3 text-white" >
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Your message" style={styles.input} required />
                  </Form.Group>

                  <Button variant="warning" type="submit" className="w-100 fw-bold rounded">
                    Send Message
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* FAQ Section with Custom Styling */}
          <Col md={6} className="mt-4 mt-md-0">
            <h3 className="fw-bold text-center text-primary mb-3">Frequently Asked Questions</h3>
            <div style={styles.faqContainer}>
              {faqData.map((faq, index) => (
                <div key={index} style={styles.faqItem} onClick={() => toggleFAQ(index)}>
                  <div style={styles.faqQuestion}>
                    <span className="text-primary">{faq.question}</span>
                    <FaChevronDown style={{ transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
                  </div>
                  {openIndex === index && <div className="text-secondary">{faq.answer}</div>}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

// FAQ Data
const faqData = [
  {
    question: "How do I add an expense?",
    answer: "Click the 'Add Expense' button and enter the details. Your transaction will be logged instantly.",
  },
  {
    question: "Can I edit or delete an expense?",
    answer: "Yes! You can edit or remove any transaction directly from your dashboard.",
  },
  {
    question: "Does the app provide spending insights?",
    answer: "Yes! The dashboard features charts and analytics to help you manage your finances better.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely! We use secure methods to store and protect your data.",
  },
];

const styles = {
  contact: {
    padding: "60px 0",
  },
  card: {
   
    padding: "20px",
    borderRadius: "10px",
   
  
  },
  input: {
    backgroundColor: "#f8f9fa",
    border: "none",
    borderRadius: "5px",
    padding: "10px",
  },
  faqContainer: {
    

    padding: "20px",
  },
  faqItem: {
    border:"1px solid #ffc107",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "0.3s",
  },
  faqQuestion: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    
  },
  faqAnswer: {
    marginTop: "10px",
    color: "#ddd",
  },
};

export default Contact;
