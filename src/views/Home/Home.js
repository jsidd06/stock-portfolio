import React from 'react'
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, CardImg, CardImgOverlay, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import stockImg from "../../Images/518-5187885_picture-of-a-phone-and-laptop-with-the.png"
import FooterScreen from '../FooterScreen/FooterScreen';
import NavBarScreen from '../NavBarScreen/NavBarScreen';
function Home() {
  return (
    <>
      <div>
        <Card inverse style={{ textAlign: "left" }}>
          <NavBarScreen />
          <CardBody>
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
                      <Link
                        className="btn btn-primary"
                        style={{ paddingRight: 50, paddingLeft: 50 }}
                        to="/"
                      >
                        Check Now
                      </Link>
                    </CardText>
                  </Container>
                </CardImgOverlay>
              </Col>
            </Row>
          </CardBody>
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
        <Card className="mt-2">
          <CardBody className="p-5">
            <Row className="p-4">
              <Col md="4">
                <CardBody style={{ border: "2px solid" }} className="mt-5 p-4">
                  <i
                    style={{ fontSize: 60 }}
                    className="fa-solid fa-arrow-trend-down"
                  ></i>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. <br></br>Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,{" "}
                    <br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                  <Link
                    className="btn btn-warning"
                    style={{ paddingRight: 50, paddingLeft: 50 }}
                    to="/"
                  >
                    Learn Now
                  </Link>
                </CardBody>
              </Col>
              <Col md="4">
                <CardBody style={{ border: "2px solid" }} className="mt-5 p-4">
                  <i
                    style={{ fontSize: 60 }}
                    className="fa-solid fa-arrow-trend-down"
                  ></i>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. <br></br>Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,{" "}
                    <br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                  <Link
                    className="btn btn-warning"
                    style={{ paddingRight: 50, paddingLeft: 50 }}
                    to="/"
                  >
                    Learn Now
                  </Link>
                </CardBody>
              </Col>
              <Col md="4">
                <CardBody style={{ border: "2px solid" }} className="mt-5 p-4">
                  <i
                    style={{ fontSize: 60 }}
                    className="fa-solid fa-arrow-trend-down"
                  ></i>
                  <h3>What is Lorem Ipsum?</h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. <br></br>Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s,{" "}
                    <br></br>
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book.
                  </p>
                  <Link
                    className="btn btn-warning"
                    style={{ paddingRight: 50, paddingLeft: 50 }}
                    to="/"
                  >
                    Learn Now
                  </Link>
                </CardBody>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
      <Card className="text-center p-5">
        <CardBody>
          <h3>Pricing</h3>
          <p>
            lorem ipsum dolor sit <b>amet</b>
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>
          <Link to="/" className="btn btn-primary" style={{paddingRight:50,paddingLeft:50}} >Learn more</Link>
        </CardBody>
      </Card>
      <FooterScreen />
    </>
  );
}

export default Home