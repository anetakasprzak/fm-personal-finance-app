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
};

export function ChartLegend({ budgets }: ChartLegendProps) {
  return (
    <LegendBox>
      {budgets.map((budget) => (
        <LegendEl key={budget.category} budget={budget} />
      ))}
    </LegendBox>
  );
}

export function LegendEl({ budget }: { budget: Budget }) {
  return (
    <LegendElement borderColor={budget.theme}>
      <LegendText>{budget.category}</LegendText>
      <LegendNumber>{formatCurrency(budget.maximum)}</LegendNumber>
    </LegendElement>
  );
}
