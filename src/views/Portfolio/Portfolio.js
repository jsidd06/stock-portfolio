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
          {stocks.length < 1 ? (
            <h1>No Stocks Found</h1>
          ) : (
            stocks.map((stock, index) => (
              <Row key={index} className="mt-5 shadow-sm p-3  rounded">
                <Col md="6">
                  <div>
                    <h3 style={{ textDecoration: "none" }}>{stock.company}</h3>
                    <Link
                      className=" btn btn-warning p-2"
                      to={`/selloption/${stock.id}`}
                    >
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
