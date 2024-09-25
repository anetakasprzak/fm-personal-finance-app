import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

const BudgetChart = () => {
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
    <div
      style={{
        position: "relative",
        width: "240px",
        height: "240px",
        margin: "0 auto",
      }}
    >
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0 }}>$338</h2>
        <p style={{ fontSize: "14px", color: "#555" }}>of $975 limit</p>
      </div>
    </div>
  );
};

export default BudgetChart;
