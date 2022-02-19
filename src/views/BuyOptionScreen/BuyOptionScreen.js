import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  Input,
  Row,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
import NavBarScreen from "../NavBarScreen/NavBarScreen";
function BuyOptionScreen() {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const submitHandler = (e) => {
    e.preventDefault();
    const stocks = localStorage.getItem("stocks")
      ? JSON.parse(localStorage.getItem("stocks"))
      : [];
    const newStock = {
      company,
      quantity,
      price,
      id: nanoid(),
    };
    stocks.push(newStock);
    localStorage.setItem("stocks", JSON.stringify(stocks));
    alert("Stock added successfully");
    window.location = "/portfolio";
  };
  const { company } = useParams();
  if (!company) {
    return <h1>Sorry this page is not available</h1>;
  }
  // input validation
  return (
    <Container className="mt-5">
      <NavBarScreen />
      <Card>
        <CardHeader>
          <h5>{company}</h5>
        </CardHeader>
        <CardBody>
          <Form onSubmit={submitHandler}>
            <Row>
              <Col md="6">
                <h3>Quantity</h3>
                <Input
                  placeholder="Quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  minLength="2"
                  valid={quantity > 0}
                  invalid={quantity <= 0}
                />
              </Col>
              <Col md="6">
                <h3>Price</h3>
                <Input
                  placeholder="Price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  valid={price > 0}
                  invalid={price <= 0}
                  minLength="2"
                />
              </Col>
            </Row>
            <Button
              className="w-100 mt-2"
              color="primary"
              disabled={!price > 0 || !quantity > 0}
            >
              Tap To Buy
            </Button>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default BuyOptionScreen;
