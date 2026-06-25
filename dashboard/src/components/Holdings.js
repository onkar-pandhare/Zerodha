import React, { useState, useEffect } from "react";
import { VerticalGraph } from "./VerticalGraph";
import axios from "axios";

const safeFixed = (val, digits = 2) => {
  const num = parseFloat(val);
  return isNaN(num) ? "N/A" : num.toFixed(digits);
};

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
   axios.get(`${process.env.REACT_APP_BACKEND_URL}/allHoldings`)
      .then((res) => {
        setAllHoldings(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch holdings:", err);
        setError("Failed to load holdings. Please try again.");
        setLoading(false);
      });
  }, []);

  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Loading holdings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "20px", textAlign: "center", color: "red" }}>
        <p>{error}</p>
      </div>
    );
  }

  if (allHoldings.length === 0) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>No holdings found.</p>
      </div>
    );
  }

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const curValue = (stock.qty || 0) * (stock.price || 0);
              const avgCost = (stock.avg || 0) * (stock.qty || 0);
              const pnl = curValue - avgCost;
              const isProfit = pnl >= 0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name || "N/A"}</td>
                  <td>{stock.qty || 0}</td>
                  <td>{safeFixed(stock.avg)}</td>
                  <td>{safeFixed(stock.price)}</td>
                  <td>{safeFixed(curValue)}</td>
                  <td className={profClass}>
                    {safeFixed(pnl)} (
                    {avgCost
                      ? safeFixed((pnl / avgCost) * 100)
                      : "0.00"}
                    %)
                  </td>
                  <td className={profClass}>{stock.net || "N/A"}</td>
                  <td className={dayClass}>{stock.day || "N/A"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;