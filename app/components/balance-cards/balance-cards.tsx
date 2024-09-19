"use client";

import { Balance } from "@/app/types";
import {
  BalanceCard,
  BalanceCardsBox,
  CardAmount,
  CardText,
} from "./balance-cards.styled";

type BalanceCardsProps = {
  balance: Balance;
};

function BalanceCards({ balance }: BalanceCardsProps) {
  const UKCurrency = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <BalanceCardsBox>
      <BalanceCard>
        <CardText>Current Balance</CardText>
        <CardAmount>{UKCurrency.format(balance.current)}</CardAmount>
      </BalanceCard>

      <BalanceCard>
        <CardText>Income</CardText>
        <CardAmount>{UKCurrency.format(balance.income)}</CardAmount>
      </BalanceCard>

      <BalanceCard>
        <CardText>Expenses</CardText>
        <CardAmount>{UKCurrency.format(balance.expenses)}</CardAmount>
      </BalanceCard>
    </BalanceCardsBox>
  );
}

export default BalanceCards;
