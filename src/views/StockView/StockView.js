import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardHeader, Col, Container, Input, Row } from "reactstrap";
import data from "../../FakeData/FakeData";
function StockView() {
  if (!localStorage.getItem("token")) {
    window.location = "/login";
  }
  return (
    <Container className="mt-2">
      <Card>
        <CardHeader>
          <h3>Stock View</h3>
        </CardHeader>
        <CardBody>
          <Input placeholder="search now" />
          {data.map((stock) => (
            <Row className="mt-5 shadow-sm p-3  rounded">
              <Col md="6">
                <div key={stock.id}>
                  <h3>
                    {stock.company}
                  </h3><br></br>
                  <Link className=" btn btn-primary"  to="/buy_sell">BuyNow
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

export default StockView;
