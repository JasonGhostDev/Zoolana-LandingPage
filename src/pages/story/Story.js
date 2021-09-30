import React from "react";
import "./Story.css";
import {
  Row,
  Col,

  Container,

} from "react-bootstrap";
import { Link } from "react-router-dom";

const Story = ({ leftElement, rightElement, prevRoute, nextRoute }) => {
  return (
    <Container className="bg-image">
      <Row className="justify-content-center  story_container align-items-center">
        <Col md={{ offset: 0 }}>
          <div className="text-left">{leftElement}</div>
        </Col>
        <Col md={{ span: 6, offset: 0 }}>{rightElement}</Col>
        <Row>
          <Col>
            {prevRoute && (
              <Link className="prev_story u_story_cta" to={prevRoute}>
                Previous
              </Link>
            )}
          </Col>{" "}
          <Col>
            {nextRoute && (
              <Link className="next_story u_story_cta" to={nextRoute}>
                Next
              </Link>
            )}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Story;
