import { Balance } from "@/app/types";

type BalanceCardsProps = {
  balance: Balance;
};

function BalanceCards({ balance }: BalanceCardsProps) {
  const UKCurrency = new Intl.NumberFormat("en-UK", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <>
      <p>{UKCurrency.format(balance.current)}</p>
      <p>{UKCurrency.format(balance.income)}</p>
      <p>{UKCurrency.format(balance.expenses)}</p>
    </>
  );
}

export default BalanceCards;
