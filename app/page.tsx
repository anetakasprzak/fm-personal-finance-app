"use client";

import data from "./data/data.json";
import BalanceCards from "./components/balance-cards/balance-cards";
import { Heading } from "./components/heading/heading.styled";
import DoughnutChart from "./components/chart/chart";

export default function Home() {
  return (
    <>
      <Heading>Overview</Heading>
      <BalanceCards balance={data.balance} />
      <DoughnutChart budgets={data.budgets} />
    </>
  );
}
