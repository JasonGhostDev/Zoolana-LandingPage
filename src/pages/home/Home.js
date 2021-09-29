import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Home.css";
import zoolanaLogo from "../../assets/images/zoolanaLogo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <Row style={{ height: "100%" }}>
        <Col>
          <Image className="logo_image" src={zoolanaLogo} alt="logo" />
        </Col>
      </Row>
      <Row>
        <Col className="social_handle_container t_text-shadow  text-center">
          <Row>
            <Col>
              <Link className="t_social" to="#">
                TWITTER
              </Link>
            </Col>
            <Col>
              <Link className="t_social" to="#">
                DISCORD
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
