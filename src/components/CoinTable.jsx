const CoinTable = ({ coins }) => {
  return (
    <div>
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
              <img
                src={coin.image}
                alt={coin.name}
                style={{ width: "30px", height: "30px" }}
              />
              <span>
                {coin.name} ({coin.symbol.toUpperCase()})
              </span>
              <span>{coin.current_price}</span>
              <span
                style={{
                  color: coin.price_change_percentage_24h < 0 ? "red" : "green",
                }}
              >
                {coin.price_change_percentage_24h}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CoinTable;
