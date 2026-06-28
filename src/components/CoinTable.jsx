import { Link } from "react-router-dom";
const CoinTable = ({ coins }) => {
  return (
    <div>
      <ul>
        {coins.map((coin) => {
          const price = coin.quotes?.USD?.price?.toFixed(2) || "0.00";
          const change = coin.quotes?.USD?.percent_change_24h || 0;
          const isNegative = change < 0;
          return (
            <li
              key={coin.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "10px 0",
              }}
            >
              <span>
                {coin.name} {coin.symbol.toUpperCase()}
              </span>
              <span>${price}</span>
              <span
                style={{
                  color: isNegative ? "red" : "green",
                }}
              >
                {coin.price_change_percentage_24h}
              </span>
              <Link to={"coin/${coins.id}"}>Details</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoinTable;
