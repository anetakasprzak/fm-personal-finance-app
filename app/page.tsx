import data from "./data/data.json";
import BalanceCards from "./components/balance-cards/balance-cards";

export default function Home() {
  return <BalanceCards balance={data.balance} />;
}
