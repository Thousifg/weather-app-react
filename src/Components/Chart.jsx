import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Card6 } from "./Cards";

const labels = [
  "0am",
  "1am",
  "2am",
  "3am",
  "4am",
  "5am",
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12am",
  "13pm",
  "14pm",
  "15pm",
  "16pm",
  "17pm",
  "18pm",
  "19pm",
  "20pm",
  "21pm",
  "22pm",
  "23pm",
];

const lineChart = (props) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temp",
        backgroundColor: "#f59e0b",
        borderColor: "#f59e0b",
        borderWidth: 3,
        data: props.data.map((val) => val.temp_c),
      },
    ],
  };

  return (
    <>
      <div className="dark:bg-zinc-pm h-48 rounded-2xl w-full overflow-x-scroll my-2 scrollmih">
        <div className="w-full">
          <div className="flex p-4 dark:text-white">
            {props.data.map((val, index) => {
              return (
                <Card6
                  temp={val.temp_c}
                  imgsrc={val.condition.icon}
                  time={labels[index]}
                />
              );
            })}
          </div>
          <div className="h-12 w-[1275px] pl-8">
            <Line
              data={data}
              options={{
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default lineChart;
