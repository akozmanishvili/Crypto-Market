import { useParams, Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CoinDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `https://api.coingecko.com/api/v3/coins/${id}`,
  );

  if (isLoading) return <h2>Loading details...</h2>;
  if (error)
    return <h2 className="price-negative">Error loading coin details.</h2>;
  if (!data) return null;

  const { name, symbol, image, market_data } = data;
  const price = market_data?.current_price?.usd?.toLocaleString() || "0.00";
  const change = market_data?.price_change_percentage_24h || 0;
  const isNegative = change < 0;

  return (
    <div>
      <Link to="/" className="btn-back">
        ← Back to Market
      </Link>

      <div className="details-card">
        <div
          className="coin-info"
          style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}
        >
          <img
            src={image?.large}
            alt={name}
            style={{ width: "48px", height: "48px" }}
          />
          <h2>
            {name}{" "}
            <span className="coin-symbol" style={{ fontSize: "1.2rem" }}>
              ({symbol})
            </span>
          </h2>
        </div>

        <hr
          style={{
            border: "none",
            borderTop: "1px solid var(--border)",
            margin: "1rem 0",
          }}
        />

        <h3>
          Current Value:{" "}
          <span style={{ color: "var(--text-main)", fontWeight: "bold" }}>
            ${price}
          </span>
        </h3>
        <h3>
          24h Performance:{" "}
          <span className={isNegative ? "price-negative" : "price-positive"}>
            {isNegative ? "" : "+"}
            {change.toFixed(2)}%
          </span>
        </h3>
      </div>
    </div>
  );
};
export default CoinDetails;
