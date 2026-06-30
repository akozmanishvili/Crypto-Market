import { Link } from "react-router-dom";
const CoinTable = ({ coins }) => {
  return (
    <div className="table-container">
      <ul>
        {coins.map((coin) => {
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
              <div className="coin-info">
                <img
                  src={coin.image}
                  alt={coin.name}
                  style={{ width: "30px", height: "30px" }}
                />
                <span className="coin-symbol">
                  {coin.name} ({coin.symbol.toUpperCase()}) $
                  {coin.current_price}
                </span>
              </div>
              <span
                style={{
                  color: coin.price_change_percentage_24h < 0 ? "red" : "green",
                }}
              >
                {coin.price_change_percentage_24h}%
              </span>
              <Link to={`/coin/${coin.id}`} className="btn-details">
                Details
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoinTable;
