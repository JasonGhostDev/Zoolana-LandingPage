import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Tower from "../../assets/images/tower-img.png";
import "./Story.css";

const Story = () => {
  return (
    <Container className="bg-image">
      <Row className="justify-content-center  story_container align-items-center">
        <Col md={{ offset: 2 }}>
          <div className="text-left">
            <h4 className="t_text-shadow">STORY</h4>
            <div className="t_story t_text-shadow ">
              <p>
                It's the year 2300. Extreme wealth disparity has divided the
                world into two zones. While the poor live in squalor, living and
                dying in failing cities, the ultra-wealthy build a paradise just
                for themselves: Zoolana.
                <br />
                <br />
                Deep within the Rocky Mountains, they build an enclave for the
                rich and famous. The amount of money and land they invest in
                Zoolana is unprecedented. But, the rich hoard it all. Robots and
                machines equipped with Al are cheap and accessible, turning
                labor into a novelty, but still, the poor are excluded. The
                wealthy's Al rapidly accelerates the pace of improving
                technology and only they benefit. Below, the world's poor
                starve, and perish.
                <br />
                <br />
                Initially built so the citizens of Zoolana could maintain and
                surround themselves with the ones that lavish on extravagant
                lifestyles, the city turns into something...else. After years of
                seclusion in the mountains, and with limitless technology at
                their fingertips, the city's inhabitants begin to turn strange.
                They start to abuse their power, using technology for strange
                and twisted experiments.
                <br />
                <br />
                Among other gross uses of their power, the inhabitants begin
                modifying animals as a source of entertainment, hosting
                gladiator battles to the death, even going so far as to give
                them human-like intelligence to make the battles more
                entertaining. They named these animals Zanis. Slowly but surely,
                a deep hatred is borne deep within these oppressed creatures.
                <br />
                <br />
                After withstanding more than five years of inequity and
                mistreatment by the citizens of Zoolana, rallied by their
                pent-up anger and frustration, the Zanis rebel. They hijack the
                headquarters with the skills they've forged from years of battle
                in the Colosseum, and overwhelm the operators, forcing them to
                shut down all communications in Zoolana. "Lights out." And the
                hunt begins.
              </p>
            </div>
          </div>
        </Col>
        <Col md={{ span: 6, offset: 0 }}>
          <Image className="story_image" src={Tower} alt="display" />
        </Col>
      </Row>
    </Container>
  );
};

export default Story;