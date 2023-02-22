import { Container, Row, Col, Stack, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import YoutubeIcon from "../../Assets/icons8-youtube-48.png";

function Home2() {
  return (
    <Card className="text-center bg-inherit">
      <Card className="text-center w-50 m-auto bg-inherit">
        <Card.Header className="headding-cards"> Track Any Social Media Platform</Card.Header>
        <Container fluid>
          <Row>
            <Col >
              <Button className="zoom bg-inherit btn-card">
                <Stack>
                  <div className="text-center">
                    <img src={YoutubeIcon} alt="youtube" />
                  </div>
                  <div className="text-center ">
                    <strong className="main-name">
                      Real-Time Social Media Statistics
                    </strong>
                  </div>
                </Stack>
              </Button>
            </Col>
            <Col>
              <Button className="zoom bg-inherit btn-card">
                <Stack>
                  <div className="text-center">
                    <img src={YoutubeIcon} alt="youtube" />
                  </div>
                  <div className="text-center ">
                    <strong className="main-name">
                      Real-Time Social Media Statistics
                    </strong>
                  </div>
                </Stack>
              </Button>
            </Col>
          </Row>
        </Container>
      </Card>
    </Card>
  );
}

export default Home2;
