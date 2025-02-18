import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Pricing = () => {
  return (
    <div className="pricing-section " id="pricing">
      <Container>
        <h2 className="text-center text-dark fw-bold mb-4">Choose Your Plan</h2>
        <Row className="justify-content-center">
          {pricingPlans.map((plan, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card style={styles.card} className="text-center">
                <Card.Body>
                  <h4 className="fw-bold">{plan.name}</h4>
                  <h2 style={styles.price}>{plan.price}</h2>
                  <p className="text-muted">{plan.description}</p>
                  <ul className="list-unstyled" style={styles.featuresList}>
                    {plan.features.map((feature, i) => (
                      <li key={i} style={styles.featureItem}>✔ {feature}</li>
                    ))}
                  </ul>
                  <Button variant={plan.buttonVariant} className="w-100 fw-bold">
                    {plan.buttonText}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

// Pricing Plans Data
const pricingPlans = [
  {
    name: "Basic",
    price: "$0 / month",
    description: "Ideal for individuals starting out.",
    features: ["Add expenses", "Edit & delete transactions", "Basic dashboard insights"],
    buttonText: "Get Started",
    buttonVariant: "outline-primary",
  },
  {
    name: "Pro",
    price: "$9.99 / month",
    description: "For users who need advanced analytics.",
    features: ["All Basic features", "Detailed spending insights", "Downloadable reports"],
    buttonText: "Upgrade Now",
    buttonVariant: "primary",
  },
  {
    name: "Business",
    price: "$19.99 / month",
    description: "For businesses tracking multiple expenses.",
    features: ["All Pro features", "Multi-user access", "Custom financial reports"],
    buttonText: "Go Premium",
    buttonVariant: "outline-primary",
  },
];

// Styles
const styles = {

  card: {
    padding: "20px",
    borderRadius: "12px",
    transition: "0.3s",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
  },
  price: {
    color: "#ffc107",
    fontWeight: "bold",
  },
  featuresList: {
    padding: "0",
    marginBottom: "20px",
  },
  featureItem: {
    listStyle: "none",
    padding: "5px 0",
    fontSize: "14px",
    color: "#555",
  },
};

export default Pricing;
