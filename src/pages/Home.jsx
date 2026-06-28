import { useState } from "react";
import SearchBox from "../components/SearchBox";
import CoinTable from "../components/CoinTable";
const Home = () => {
  const [input, setInput] = useState(``);

  const mockCoins = [
    {
      id: "bitcoin",
      name: "Bitcoin",
      symbol: "btc",
      current_price: 64000,
      image: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png",
    },
    {
      id: "ethereum",
      name: "Ethereum",
      symbol: "eth",
      current_price: 3400,
      image: "https://assets.coingecko.com/coins/images/279/large/ethereum.png",
    },
    {
      id: "dogecoin",
      name: "Dogecoin",
      symbol: "doge",
      current_price: 0.14,
      image: "https://assets.coingecko.com/coins/images/431/large/dogecoin.png",
    },
  ];

  const filteredCoins = mockCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(input.toLowerCase());
  });
  return (
    <div>
      <h2>Crypto Market</h2>

      <SearchBox input={input} setInput={setInput}></SearchBox>
      <CoinTable coins={filteredCoins}></CoinTable>
    </div>
  );
};

export default Home;
