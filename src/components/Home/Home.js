import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="d-flex justify-content-center">
            <Col md={7} className="home-header">
              <h1 className="heading-name">
                <strong className="main-name">
                  Real-Time Social Media Statistics
                </strong>
              </h1>
              <span role="img">
                Get Live Subscribers and Followers Count Along With Other Useful
                Metrics
              </span>
              <div style={{ paddingTop: 50,paddingBottom: 50 }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
