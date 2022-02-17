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
function SellOptionScreen() {
  const { id } = useParams();
  const stocks = localStorage.getItem("stocks")
    ? JSON.parse(localStorage.getItem("stocks"))
    : [];
  const stock = stocks.find((stock) => stock.id === id);

  const [quantity, setQuantity] = useState(stock && stock.quantity);
  const [price, setPrice] = useState(stock && stock.price);
  const submitHandler = (e) => {
    e.preventDefault();
    const filteredStocks = stocks.filter((s) => s.id !== id);
    localStorage.setItem("stocks", JSON.stringify(filteredStocks));
    alert("Stock sold successfully");
    window.location = "/portfolio";
  };

  if (!stock) {
    return <h1>The stock is not available</h1>;
  }
  return (
    <Container className="mt-5">
      <Card>
        <CardHeader>
          <Row>
            <h5>{stock.company}</h5>
            <Col md="6">
              <h3>Quantity</h3>
              <Input
                placeholder="Quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                invalid={quantity === ""}
                min="1"
              />
            </Col>
            <Col md="6">
              <h3>Price</h3>
              <Input
                placeholder="Price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                invalid={price === ""}
                min="1"
              />
            </Col>
          </Row>
          <Button
            className="w-100 mt-2"
            onClick={submitHandler}
            color="warning"
          >
            Tap To Sell
          </Button>
        </CardHeader>
      </Card>
    </Container>
  );
}

export default SellOptionScreen;
