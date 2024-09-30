"use client";
import { ChartLegend } from "@/app/components/chart-legend/chart-legend";
import data from "../../data/data.json";
import BudgetChart from "@/app/components/chart/chart";
import { Heading } from "@/app/components/heading/heading.styled";
import React from "react";

function BudgetsPage() {
  return (
    <>
      <Heading>Budgets</Heading>
      <div style={{ backgroundColor: "#fff" }}>
        <BudgetChart budgets={data.budgets} />
        <ChartLegend budgets={data.budgets} location="budgets" />
      </div>
    </>
  );
}

export default BudgetsPage;
