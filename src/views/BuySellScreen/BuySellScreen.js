import React from 'react'
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, Row, Table } from 'reactstrap'

function BuySellScreen() {
  if(!localStorage.getItem("token")){
    window.location = "/login";
  }
  return (
    <Container className="text-center mt-5">
      <Card>
        <Row>
          <Col md="6">
            <Button style={{ paddingLeft: 50, paddingRight: 50 }}>Buy</Button>
          </Col>
          <Col md="6">
            <Button style={{ paddingLeft: 50, paddingRight: 50 }}>Sell</Button>
          </Col>
        </Row>
        <CardHeader>
          <Link to="/" style={{ textDecoration: "none" }}>
            View Chart{" "}
          </Link>
        </CardHeader>
        <CardBody>
          <Row>
            <Col md="6">create alert</Col>
            <Col md="6">create GTT</Col>
          </Row>
          <Table responsive>
            <thead>
              <tr>
                <th>Market Depth</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
                <th>Table heading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
              </tr>
            </tbody>
          </Table>
          <Row>
            <Col md="3">
              <p>open</p>
              <p>433.00</p>
            </Col>
            <Col md="3">
              <p>high</p>
              <p>433.00</p>
            </Col>
            <Col md="3">
              <p>low</p>
              <p>433.00</p>
            </Col>
            <Col md="3">
              <p>prev.close</p>
              <p>433.00</p>
            </Col>
          </Row>
          <Table striped>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
}

export default BuySellScreen