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
  const stocks = localStorage.getItem("stocks")
    ? JSON.parse(localStorage.getItem("stocks"))
    : [];

  return (
    <Container className="mt-2">
      <Card>
        <CardHeader>
          <h3>Portfolio</h3>
        </CardHeader>
        <CardBody>
          {/* <Row style={{ textAlign: "center" }}>
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
          </Row> */}
          {stocks.length < 1 ? (
            <h1>No Stocks Found</h1>
          ) : (
            stocks.map((stock, index) => (
              <Row key={index} className="mt-5 shadow-sm p-3  rounded">
                <Col md="6">
                  <div>
                    <h3 style={{ textDecoration: "none" }}>{stock.company}</h3>
                    <Link className=" btn btn-primary p-2" to="/buy_sell">
                      BuyNow
                    </Link>{" "}
                    <Link className=" btn btn-warning p-2" to="/buy_sell">
                      SellNow
                    </Link>
                  </div>
                </Col>
                <Col md="6" style={{ textAlign: "right" }}>
                  <p>Price: {stock.price}</p>
                  <p>Quantity: {stock.quantity}</p>
                </Col>
              </Row>
            ))
          )}
        </CardBody>
      </Card>
    </Container>
  );
}

export default Portfolio;
