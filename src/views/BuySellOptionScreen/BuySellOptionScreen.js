import React from "react";
import { Button, Card, CardHeader, Col, Container, Input, Row } from "reactstrap";
import { Select, Radio, Switch } from "antd";
import { Link } from "react-router-dom";
function BuySellOptionScreen() {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("Submitted");
    window.location = "/portfolio";
  }
  return (
    <Container className="mt-5">
      <Card>
        <CardHeader>
          <Row>
            <Col md="6">
              <h3>Quantity</h3>
              <Input placeholder="Quantity" />
            </Col>
            <Col md="6">
              <h3>Price</h3>
              <Input placeholder="Price" />
            </Col>
          </Row>
          <h4 className="mt-3">Product</h4>
          <Radio.Group value={120} className="w-100">
            <Row>
              <Col md="6">
                <Radio.Button value="large">Longterm</Radio.Button>
              </Col>
              <Col md="6">
                <Radio.Button value="default">Intready</Radio.Button>
              </Col>
            </Row>
          </Radio.Group>
          <h4 className="mt-3">Type</h4>
          <Radio.Group value={120} className="w-100">
            <Row>
              <Col md="3">
                <Radio.Button value="large">Market</Radio.Button>
              </Col>
              <Col md="3">
                <Radio.Button value="default">Limit</Radio.Button>
              </Col>
              <Col md="3">
                <Radio.Button value="default">Sm</Radio.Button>
              </Col>
              <Col md="3">
                <Radio.Button value="default">Sl-m</Radio.Button>
              </Col>
            </Row>
          </Radio.Group>
          <h4 className="mt-3">GTT</h4>
          <Row>
            <Col md="6">
              <h3>set stoploss</h3>
            </Col>
            <Col md="6">
              <Switch defaultChecked />
            </Col>
            <Col md="6">
              <h3>set stoploss </h3>
            </Col>
            <Col md="6">
              <Switch defaultChecked />
            </Col>
          </Row>
          <div className="text-center">
            <Button style={{ paddingLeft: 50, paddingRight: 50 }}>More</Button>
          </div>
          <Button className="w-100 mt-2" onClick={submitHandler} color="primary">Tap To Buy</Button>
        </CardHeader>
      </Card>
    </Container>
  );
}

export default BuySellOptionScreen;
