import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPlusCircle, FaEdit, FaTrash, FaChartPie } from "react-icons/fa";

const Features = () => {
  return (
    <div className="features-section mb-5 text-dark" id="features"  >
      <Container>
        <h2 className="text-center fw-bold mb-5 mt-3">
          What Makes <span style={{ color: "#ffc107" }}>Casha</span> Stand Out?
        </h2>
        
        <Row className="g-4">
          {featuresData.map((feature, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 text-center p-3 bg-primary" style={styles.card}>
                <div className="icon mb-3" style={styles.icon}>
                  {feature.icon}
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold">{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

const featuresData = [
  {
    icon: <FaPlusCircle size={40} color="#ffc107" />,
    title: "Add Expenses",
    description: "Quickly log your daily expenses to stay on track.",
  },
  {
    icon: <FaEdit size={40} color="#ffc107" />,
    title: "Edit Transactions",
    description: "Made a mistake? Easily modify any transaction.",
  },
  {
    icon: <FaTrash size={40} color="#ffc107" />,
    title: "Delete Entries",
    description: "Remove unwanted expenses with just a click.",
  },
  {
    icon: <FaChartPie size={40} color="#ffc107" />,
    title: "Dashboard Insights",
    description: "Visualize your spending with interactive charts.",
  },
];

const styles = {
  
 
  card: {
     
    color: "white",
    border: "1px solid white",
    borderRadius: "10px",
  },
  icon: {
    fontSize: "40px",
  },
};

export default Features;
