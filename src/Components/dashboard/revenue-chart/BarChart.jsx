"use client";

import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Online Sales", "Offline Sales", "Profit"],
  ["Monday", 1000, 400, 200],
  ["Tuesday", 1170, 460, 250],
  ["Wednesday", 660, 1120, 300],
  ["Thursday", 1030, 540, 350],
  ["Friday", 1030, 540, 350],
  ["Saturday", 1030, 540, 350],
  ["Sunday", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2020-2023",
  },
};

const BarChartExample = () => {
  return (
    <div className="mt-6">
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
        className="text-teal-500"
      />
    </div>
  );
};
export default BarChartExample;
