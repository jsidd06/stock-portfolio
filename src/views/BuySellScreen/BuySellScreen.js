import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
  Table,
} from "reactstrap";
import Tabledata from "../../FakeData/TableFakeData";
import data from "../../FakeData/FakeData";
function BuySellScreen() {
  return (
    <Container className="text-center mt-5">
      <Card>
        <Row>
          <Col md="6">
            <Link
              to="/selloption"
              className="btn btn-primary"
              style={{ paddingLeft: 50, paddingRight: 50 }}
            >
              Buy
            </Link>
          </Col>
          <Col md="6">
            <Link
              to="/graph"
              className="btn btn-warning"
              style={{ paddingLeft: 50, paddingRight: 50 }}
            >
              View Graph
            </Link>
          </Col>
        </Row>
        <CardBody>
          <Table responsive>
            <thead>
              <tr>
                <th>Bid</th>
                <th>Orders</th>
                <th>Quantity</th>
                <th>Offer</th>
                <th>Orders</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {Tabledata.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.bid}</td>
                  <td>{stock.bidOrders}</td>
                  <td>{stock.bidQuantity}</td>
                  <td>{stock.offer}</td>
                  <td>{stock.offerOrders}</td>
                  <td>{stock.offerQuantity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {data.map((stock, index) => (
            <Row key={index} className="mt-2 shadow-sm p-1  rounded">
              <Col md="6">
                <div key={stock.id} style={{ textAlign: "left" }}>
                  <Link style={{ textDecoration: "none" }} to="/buy_sell">
                    {stock.company}
                  </Link>
                </div>
              </Col>
              <Col md="6" style={{ textAlign: "right" }}>
                <p>Change: {stock.change}</p>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}

export default BuySellScreen;
