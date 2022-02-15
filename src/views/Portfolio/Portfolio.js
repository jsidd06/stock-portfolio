import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import data from "../../FakeData/FakeData";
function Portfolio() {
  if (!localStorage.getItem("token")) {
    window.location = "/login";
  }
  return (
    <Container className="mt-2">
      <Card>
        <CardHeader>
          <h3>Portfolio</h3>
        </CardHeader>
        <CardBody>
          <Row style={{ textAlign: "center" }}>
            <Col md="6">
              <h3>Invested</h3>
            </Col>
            <Col md="6">
              <h3>Current</h3>
            </Col>
            <Col md="6">
              <h3>43.454</h3>
            </Col>
            <Col md="6">
              <h3>34.33</h3>
            </Col>
          </Row>
          <hr></hr>
          <Row style={{ textAlign: "center" }}>
            <Col md="6">
              <h3>P&L</h3>
            </Col>
            <Col md="6">
              <h3>43.454</h3>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Input placeholder="search now" />
            </Col>
            <Col md="3">
              <h4>Filter</h4>
            </Col>
            <Col md="6" style={{ textAlign: "right" }}>
              <h4>Analytics</h4>
            </Col>
          </Row>
          {data.map((stock) => (
            <Row className="mt-5 shadow-sm p-3  rounded">
              <Col md="6">
                <div key={stock.id}>
                  <Link style={{ textDecoration: "none" }} to="/buy_sell">
                    {stock.company}
                  </Link>
                </div>
              </Col>
              <Col md="6" style={{ textAlign: "right" }}>
                <p>Price: {stock.price}</p>
                <p>Change: {stock.change}</p>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}

export default Portfolio;
