import React from 'react'
import {Card, CardBody, CardHeader, Col, Container, Row}from "reactstrap"
import data from "../../FakeData/FakeData"
function StockView() {
  return (
    <Container>
      <Card>
        <CardHeader>
          <h3>Stock View</h3>
        </CardHeader>
        <CardBody>
          {data.map((stock) => (
            <Row>
              <Col>
                <div key={stock.id}>
                  <h3>{stock.company}</h3>
                  <p>Price: {stock.price}</p>
                  <p>Change: {stock.change}</p>
                  <p>Change Percentage: {stock.changePercentage}</p>
                  <p>Volume: {stock.volume}</p>
                  <p>Market Cap: {stock.marketCap}</p>
                  <p>P/E Ratio: {stock.peRatio}</p>
                  <p>52 Week High: {stock.week52High}</p>
                  <p>52 Week Low: {stock.week52Low}</p>
                  <p>YTD Change: {stock.ytdChange}</p>
                </div>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Container>
  );
}

export default StockView