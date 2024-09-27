"use client";

import { Balance } from "@/app/types";
import {
  BalanceCard,
  BalanceCardsBox,
  CardAmount,
  CardText,
} from "./balance-cards.styled";
import { formatCurrency } from "@/app/lib/utils";

type BalanceCardsProps = {
  balance: Balance;
};

function BalanceCards({ balance }: BalanceCardsProps) {
  return (
    <BalanceCardsBox>
      <BalanceCard style={{ backgroundColor: "#201F24" }}>
        <CardText style={{ color: "#fff" }}>Current Balance</CardText>
        <CardAmount style={{ color: "#fff" }}>
          {formatCurrency(balance.current)}
        </CardAmount>
      </BalanceCard>

      <BalanceCard>
        <CardText>Income</CardText>
        <CardAmount>{formatCurrency(balance.income)}</CardAmount>
      </BalanceCard>

      <BalanceCard>
        <CardText>Expenses</CardText>
        <CardAmount>{formatCurrency(balance.expenses)}</CardAmount>
      </BalanceCard>
    </BalanceCardsBox>
  );
}

export default BalanceCards;
