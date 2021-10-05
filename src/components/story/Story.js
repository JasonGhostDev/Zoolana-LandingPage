import React from "react";
import "./Story.css";
import {
  Row,
  Col,
 
  Container,
 
} from "react-bootstrap";

const Story = ({ leftElement, rightElement, propClass }) => {
  return (
    <Container className="bg-image">
      <Row
        className={`justify-content-center story_container align-items-center  ${
          propClass ?? ""
        }`}
      >
        <Col md={{ offset: 0 }}>
          <div className="text-left">{leftElement}</div>
        </Col>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <Col md={{ span: 6, offset: 0 }}>{rightElement}</Col>
      </Row>
    </Container>
  );
};

export default Story;
