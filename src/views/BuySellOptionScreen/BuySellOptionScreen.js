import React, { useState } from "react";
import { Button, Card, CardHeader, Col, Container, Input, Row } from "reactstrap";
import { Select, Radio, Switch } from "antd";
import { Link } from "react-router-dom";
function BuySellOptionScreen() {
  const [quantity, setQuantity] = useState([]);
  const [price, setPrice] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Submitted");
    setQuantity([]);
    setPrice([]);
    window.location = "/portfolio";
  }
  
    console.log(quantity);
    console.log(price);
  return (
    <Container className="mt-5">
      <Card>
        <CardHeader>
          <Row>
            <Col md="6">
              <h3>Quantity</h3>
              <Input placeholder="Quantity" type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </Col>
            <Col md="6">
              <h3>Price</h3>
              <Input placeholder="Price" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </Col>
          </Row>
          <Button className="w-100 mt-2" onClick={submitHandler} color="primary">Tap To Buy</Button>
        </CardHeader>
      </Card>
    </Container>
  );
}

export default BuySellOptionScreen;
