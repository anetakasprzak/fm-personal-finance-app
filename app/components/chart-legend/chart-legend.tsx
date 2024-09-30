import { Budget } from "@/app/types";
import {
  LegendElement,
  LegendBox,
  LegendText,
  LegendNumber,
} from "./chart-legend.styled";
import { formatCurrency } from "@/app/lib/utils";

type ChartLegendProps = {
  budgets: Budget[];
  location: "dashboard" | "budgets";
};

export function ChartLegend({ budgets, location }: ChartLegendProps) {
  return (
    <LegendBox>
      {budgets.map((budget) => {
        if (location === "dashboard") {
          return <LegendElDashboard key={budget.category} budget={budget} />;
        }

        if (location === "budgets") {
          return <LegendElBudgets key={budget.category} budget={budget} />;
        }
      })}
    </LegendBox>
  );
}

export function LegendElDashboard({ budget }: { budget: Budget }) {
  return (
    <LegendElement borderColor={budget.theme}>
      <LegendText>{budget.category}</LegendText>
      <LegendNumber>{formatCurrency(budget.maximum)}</LegendNumber>
    </LegendElement>
  );
}

export function LegendElBudgets({ budget }: { budget: Budget }) {
  return (
    <LegendElement borderColor={budget.theme}>
      <LegendText>{budget.category}</LegendText>
      <LegendNumber>
        {formatCurrency(15)} of{" "}
        <span style={{ color: "red" }}>{formatCurrency(budget.maximum)}</span>
      </LegendNumber>
    </LegendElement>
  );
}
