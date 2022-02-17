import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  Col,
  Container,
  Input,
  Row,
} from "reactstrap";
import { useParams } from "react-router-dom";
import { nanoid } from "nanoid";
function BuyOptionScreen() {
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
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
      <Card>
        <CardHeader>
          <Row>
            <h5>{company}</h5>
            <Col md="6">
              <h3>Quantity</h3>
              <Input
                placeholder="Quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </Col>
            <Col md="6">
              <h3>Price</h3>
              <Input
                placeholder="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
          </Row>
          <Button
            className="w-100 mt-2"
            onClick={submitHandler}
            color="primary"
          >
            Tap To Buy
          </Button>
        </CardHeader>
      </Card>
    </Container>
  );
}

export default BuyOptionScreen;
