import React, { useEffect, useState } from "react";
import Charts from "react-apexcharts";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Col,
} from "reactstrap";
import { getRandomGraph } from "../../utils/helpers";
import NavBarScreen from "../NavBarScreen/NavBarScreen";
function GraphScreen() {
  const labels = [];
  const [series, setSeries] = useState(getRandomGraph(0, 100, 20));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeries([...series, ...getRandomGraph(60, 100, 10)]);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const leadColors = {
    series1: "#00d4bd",
    series2: "#826bf8",
    series3: "#2b9bf4",
    series4: "#FFA1A1",
    series5: "#424242",
  };
  const options = {
    legend: {
      show: true,
      position: "bottom",
    },
    labels,
    colors: [
      leadColors.series1,
      leadColors.series2,
      leadColors.series3,
      leadColors.series4,
      leadColors.series5,
    ],

    plotOptions: {
      bar: {
        bar: {
          labels: {
            name: {
              fontSize: "2rem",
              fontFamily: "Montserrat",
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: "bottom",
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: "1.5rem",
                  },
                  value: {
                    fontSize: "1rem",
                  },
                  total: {
                    fontSize: "1.5rem",
                  },
                },
              },
            },
          },
        },
      },
    ],
  };
  return (
    <div className="container">
      <NavBarScreen />
      <Card className="mt-2">
        <CardHeader>
          <Row>
            <Col sm={12} md="6">
              <h3>Graph</h3>
            </Col>
            <Col sm={12} md="6">
              <Form>
                <Row>
                  <Col sm={5}>
                    <FormGroup>
                      <Label>From</Label>
                      <Input type="date" />
                    </FormGroup>
                  </Col>
                  <Col sm={5}>
                    <FormGroup>
                      <Label>To</Label>
                      <Input type="date" />
                    </FormGroup>
                  </Col>
                  <Col sm={2}>
                    <Button className="mt-4">Submit</Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Charts
            className="mt-2"
            options={options}
            series={[
              {
                name: "Pipelines",
                data: [...series],
              },
            ]}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default GraphScreen;
