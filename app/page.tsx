"use client";

import data from "./data/data.json";
import BalanceCards from "./components/balance-cards/balance-cards";
import { Heading } from "./components/heading/heading.styled";
import Container from "./components/container/container";
import BudgetChart from "./components/chart/chart";
import { ChartLegend } from "./components/chart-legend/chart-legend";

export default function Home() {
  return (
    <>
      <Heading>Overview</Heading>
      <BalanceCards balance={data.balance} />

      <Container heading="Budgets" linkText="See Details" href="/budgets">
        <BudgetChart budgets={data.budgets} />
        <ChartLegend budgets={data.budgets} location="dashboard" />
      </Container>
    </>
  );
}
