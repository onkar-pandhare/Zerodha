import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

 useEffect(() => {
  axios.get("https://zerodha-backend-xvmy.onrender.com/allOrders", { withCredentials: true })  // ← send cookie
    .then((res) => {
      setAllOrders(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Failed to fetch orders:", err);
      setError("Failed to load orders. Please try again.");
      setLoading(false);
    });
}, []);

  if (loading) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>Loading orders...</p>
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

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
        </div>
      ) : (
        <>
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Instrument</th>
                  <th>Qty.</th>
                  <th>Price</th>
                  <th>Mode</th>
                </tr>
              </thead>
              <tbody>
                {allOrders.map((order, index) => {
                  const isBuy = order.mode === "BUY";
                  return (
                    <tr key={index}>
                      <td>{order.name || "N/A"}</td>
                      <td>{order.qty || 0}</td>
                      <td>
                        {order.price ? order.price.toFixed(2) : "0.00"}
                      </td>
                      <td>
                        <p
                          style={{
                            backgroundColor: isBuy
                              ? "rgba(65, 132, 243, 0.2)"
                              : "rgba(255, 87, 34, 0.2)",
                            color: isBuy
                              ? "rgb(65, 132, 243)"
                              : "rgb(255, 87, 34)",
                            padding: "4px 8px",
                            borderRadius: "4px",
                            display: "inline-block",
                            fontWeight: "500",
                            fontSize: "0.85rem",
                          }}
                        >
                          {order.mode || "N/A"}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default Orders;