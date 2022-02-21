import React from "react";
import { Link} from "react-router-dom";
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
import NavBarScreen from "../NavBarScreen/NavBarScreen";
function StockView() {
  return (
    <Container className="mt-2">
      <NavBarScreen />
      <Card className="mt-2">
        <CardHeader>
          <h3>Stock View</h3>
        </CardHeader>
        <CardBody>
          <Input placeholder="search now" />
          {data.map((stock, index) => (
            <Row key={index} className="mt-5 shadow-sm p-3  rounded">
              <Col md="6">
                <div key={stock.id}>
                  <h3>{stock.company}</h3>
                  <br></br>
                  <Link
                    className=" btn btn-primary"
                    to={`/buy-sell/${stock.company}`}
                  >
                    BuyNow
                  </Link>
                  <Link
                    className=" btn btn-warning m-2"
                    to="/graph"
                  >
                    View Graph
                  </Link>
                </div>
              </Col>
              <Col md="6" style={{ textAlign: "right" }}>
                <p>Quantity: {stock.quantity}</p>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}

export default StockView;
