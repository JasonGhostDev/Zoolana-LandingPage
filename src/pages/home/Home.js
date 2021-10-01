import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./Home.css";
import zoolanaLogo from "../../assets/images/zoolanaLogo.svg";
import { Link } from "react-router-dom";
import DiscordLogo from "../../assets/images/discord.svg";
import TwitterLogo from "../../assets/images/twitter.svg";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Image className="logo_image" src={zoolanaLogo} alt="logo" />
        </Col>
      </Row>
      <Row className="social_handle_container t_text-shadow text-center">
        <Col>
          <Link className="t_social" to="#">
            <Image className="social_image" src={TwitterLogo} alt="logo" />
          </Link>
        </Col>
        <Col>
          <Link className="t_social" to="#">
            <Image className="social_image" src={DiscordLogo} alt="logo" />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
