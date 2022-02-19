import React from "react";
import Charts from "react-apexcharts";
import NavBarScreen from "../NavBarScreen/NavBarScreen";
function GraphScreen() {
  const labels = [];
  const series = [
    10, 20, 10, 40, 20, 30, 30, 20, 30, 20, 0, 0, 10, 20, 30, 10, 20, 30, 40,
    10, 10, 10,
  ];
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
      <Charts
        options={options}
        series={[
          {
            name: "Pipelines",
            data: [...series],
          },
        ]}
      />
    </div>
  );
}

export default GraphScreen;
