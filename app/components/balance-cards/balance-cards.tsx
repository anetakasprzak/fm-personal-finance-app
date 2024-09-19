import { Balance } from "@/app/types";

type BalanceCardsProps = {
  balance: Balance;
};

function BalanceCards({ balance }: BalanceCardsProps) {
  return (
    <>
      <p>{balance.current}</p>
      <p>{balance.income}</p>
      <p>{balance.expenses}</p>
    </>
  );
}

export default BalanceCards;
