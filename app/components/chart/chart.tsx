import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import {
  ChartWrapper,
  InsideChart,
  Amount,
  Limit,
  ChartLegendFlex,
} from "./chart.styled";
import { ChartLegend } from "../chart-legend.tsx/chart-legend";
import { Budget } from "@/app/types";

import Container from "../container/container";

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
    <>
      <Container heading="Budgets" linkText="See Details" href="/budgets">
        <ChartLegendFlex>
          <ChartWrapper>
            <Doughnut data={data} options={options} />
            <InsideChart>
              <Amount>£338</Amount>
              <Limit>of £975 limit</Limit>
            </InsideChart>
          </ChartWrapper>
          <ChartLegend budgets={budgets} />
        </ChartLegendFlex>
      </Container>
    </>
  );
};

export default BudgetChart;
