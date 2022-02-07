import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col>
            <h4>Wyszukiwarka gier</h4>
          </Col>
          <Col>
            Aplikacja zrealizowana przez grupę 2 podczas zajeć z przedmiotu
            Wykorzystanie wzorców w technologiach internetowych
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
