import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import stockImg from "../../Images/518-5187885_picture-of-a-phone-and-laptop-with-the.png"
import NavBarScreen from '../NavBarScreen/NavBarScreen';
function Home() {
  return (
    <>
      <div>
        <Card inverse style={{ textAlign: "left" }}>
          <NavBarScreen />
          <Row>
            <Col md="6"></Col>
            <Col md="6">
              <CardImg alt="Card image cap" src={stockImg} />
              <CardImgOverlay>
                <Container style={{ color: "black", marginTop: "150px" }}>
                  <CardTitle tag="h5" style={{ fontSize: 50 }}>
                    See Your Portfolio
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </CardText>
                  <CardText>
                    <Link className="btn btn-primary" to="/">
                      Check Now
                    </Link>
                  </CardText>
                </Container>
              </CardImgOverlay>
            </Col>
          </Row>
        </Card>
      </div>
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <h2>What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. <br></br>Lorem Ipsum has been the industry's standard dummy
          text ever since the 1500s, <br></br>when an unknown printer took a
          galley of type and scrambled it to make a type specimen book.
        </p>
        <Card className="mt-5">
          <CardBody>
            <Row>
              <Col md="4">
                <i
                  style={{ fontSize: 60 }}
                  className="fa-solid fa-arrow-trend-down"
                ></i>
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br></br>Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, <br></br>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </p>
                <Link className="btn btn-warning" to="/">
                  Learn Now
                </Link>
              </Col>
              <Col md="4">
                <i
                  style={{ fontSize: 60 }}
                  className="fa-solid fa-arrow-trend-down"
                ></i>
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br></br>Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, <br></br>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </p>
                <Link className="btn btn-warning" to="/">
                  Learn Now
                </Link>
              </Col>
              <Col md="4">
                <i
                  style={{ fontSize: 60 }}
                  className="fa-solid fa-arrow-trend-down"
                ></i>
                <h3>What is Lorem Ipsum?</h3>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br></br>Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, <br></br>
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book.
                </p>
                <Link className="btn btn-warning" to="/">
                  Learn Now
                </Link>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Home