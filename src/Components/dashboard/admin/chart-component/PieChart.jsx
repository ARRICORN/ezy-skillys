import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Home Decor Range", 11],

  ["Apple Smartwatches", 2],
  ["Disney Princess Pink Bag 18'", 2],
  ["Bathroom Essentials", 7],
];

export const options = {
  title: "Top Courses",
  is3D: true,
};

const PieChart = () => {
  return (
    <div className="mt-8">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
};

export default PieChart;
