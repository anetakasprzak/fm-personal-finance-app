import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { ChartWrapper, InsideChart, Amount, Limit } from "./chart.styled";

import { Budget } from "@/app/types";

Chart.register(ArcElement, Tooltip, Legend);

const BudgetChart = ({ budgets }: { budgets: Budget[] }) => {
  const data = {
    labels: ["Entertainment", "Bills", "Dining Out", "Personal Care"],
    datasets: [
      {
        data: [50, 750, 75, 100],
        backgroundColor: ["#466a5a", "#a6dce9", "#efd1b5", "#5d596a"],
        hoverBackgroundColor: ["#35524a", "#95c8d8", "#dbc5a6", "#464450"],
        borderWidth: 2,
        borderColor: "#ffffff",
      },
    ],
  };

  const options = {
    cutout: "65%",
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <ChartWrapper>
      <Doughnut data={data} options={options} />
      <InsideChart>
        <Amount>£338</Amount>
        <Limit>of £975 limit</Limit>
      </InsideChart>
    </ChartWrapper>
  );
};

export default BudgetChart;
