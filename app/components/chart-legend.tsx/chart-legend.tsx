import { Budget } from "@/app/types";
import { BudgetEl } from "./chart-legend.styled";

type ChartLegendProps = {
  budgets: Budget[];
};

export function ChartLegend({ budgets }: ChartLegendProps) {
  return (
    <div>
      {budgets.map((budget) => (
        <LegendEl key={budget.category} budget={budget} />
      ))}
    </div>
  );
}

export function LegendEl({ budget }: { budget: Budget }) {
  return (
    <BudgetEl borderColor={budget.theme}>
      <p>{budget.category}</p>
      <p>{budget.maximum}</p>
    </BudgetEl>
  );
}
