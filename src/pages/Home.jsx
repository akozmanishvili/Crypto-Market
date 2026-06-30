import { useState } from "react";
import SearchBox from "../components/SearchBox";
import CoinTable from "../components/CoinTable";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [input, setInput] = useState(``);

  const { data, isLoading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false",
  );

  console.log(data);

  if (isLoading) return <h2>Loading....</h2>;

  if (error) return <h2>Error - {error}</h2>;

  const filteredCoins =
    data &&
    data.filter((coin) =>
      coin.name.toLowerCase().includes(input.toLowerCase()),
    );

  return (
    <div>
      <h2>Crypto Market</h2>

      <SearchBox input={input} setInput={setInput}></SearchBox>
      <CoinTable coins={filteredCoins}></CoinTable>
    </div>
  );
};

export default Home;
