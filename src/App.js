import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [currency, setCurrency] = useState("");
  const [reload, setReload] = useState(0);
  const onClick = () => {
    setLoading(true);
    setReload((prev) => prev + 1);
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
    fetch("https://api.exchangerate.host/latest?base=USD&symbols=KRW")
      .then((response) => response.json())
      .then((json) => {
        let parsed = json.rates.KRW;
        setCurrency(parsed);
      });
  }, [reload]);
  return (
    <div>
      <h1>Coin charts</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <button onClick={onClick}>Click to Reload</button>
          <ul>
            {coins.map((coin) => (
              <li>
                <strong>{coin.name}</strong> ({coin.symbol}) :{" "}
                <strong> $ {coin.quotes.USD.price.toFixed(4)}</strong> | ₩{" "}
                {(coin.quotes.USD.price.toFixed(2) * currency)
                  .toFixed(2)
                  .toString()
                  .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
