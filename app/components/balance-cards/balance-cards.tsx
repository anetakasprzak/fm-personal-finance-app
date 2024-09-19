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
      <BalanceCard style={{ backgroundColor: "#201F24" }}>
        <CardText style={{ color: "#fff" }}>Current Balance</CardText>
        <CardAmount style={{ color: "#fff" }}>
          {UKCurrency.format(balance.current)}
        </CardAmount>
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
