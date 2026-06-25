require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const YahooFinance = require('yahoo-finance2').default;  // ← get the class
const yahooFinance = new YahooFinance();                  // ← create instance
const authRoute = require("./Routes/AuthRoute");
const { PositionModel } = require("./model/PositionModel");
const { HoldingModel } = require("./model/HoldingModel");
const { OrderModel } = require("./model/OrderModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();

// ✅ Middleware FIRST
app.use(cors({
  origin: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://zerodha-frontend-suna.onrender.com",
    "https://zerodha-dashboard-ymjo.onrender.com",
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// ✅ JWT verify middleware
const verifyToken = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized - please login" });
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

// ✅ Yahoo Finance symbol mapper
const getYahooSymbol = (name) => {
  const symbolMap = {
    "M&M": "M&M.NS",        // ← fix this
    "HUL": "HINDUNILVR.NS", // ← HUL is listed as HINDUNILVR on NSE
    "SGBMAY29": null,
    "KPITTECH": "KPITTECH.NS",
    "QUICKHEAL": "QUICKHEAL.NS",
  };
  if (name in symbolMap) return symbolMap[name];
  return `${name}.NS`;
};

// ✅ Fetch live price helper
const fetchLivePrice = async (name) => {
  const symbol = getYahooSymbol(name);
  if (!symbol) return null;
  try {
    const quote = await yahooFinance.quote(symbol);
    return {
      price: quote.regularMarketPrice,
      day: `${quote.regularMarketChangePercent?.toFixed(2)}%`,
      isLoss: quote.regularMarketChangePercent < 0,
    };
  } catch (err) {
    console.error(`Yahoo Finance failed for ${name}:`, err.message);
    return null;
  }
};

// ✅ Holdings — live prices with DB fallback
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingModel.find({});

    const updatedHoldings = await Promise.all(
      allHoldings.map(async (stock) => {
        const liveData = await fetchLivePrice(stock.name);
        if (liveData) {
          return {
            ...stock._doc,
            price: liveData.price,
            day: liveData.day,
            isLoss: liveData.isLoss,
          };
        }
        // ✅ fallback to DB data if API fails
        return stock._doc;
      })
    );

    res.json(updatedHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ message: "Failed to fetch holdings" });
  }
});

// ✅ Positions — live prices with DB fallback
app.get("/positions", async (req, res) => {
  try {
    let allPositions = await PositionModel.find({});

    const updatedPositions = await Promise.all(
      allPositions.map(async (stock) => {
        const liveData = await fetchLivePrice(stock.name);
        if (liveData) {
          return {
            ...stock._doc,
            price: liveData.price,
            day: liveData.day,
            isLoss: liveData.isLoss,
          };
        }
        // ✅ fallback to DB data if API fails
        return stock._doc;
      })
    );

    res.json(updatedPositions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ message: "Failed to fetch positions" });
  }
});

// ✅ Live WatchList prices
app.get("/liveWatchlist", async (req, res) => {
  try {
    const watchlistNames = [
      "INFY", "ONGC", "TCS", "KPITTECH",
      "QUICKHEAL", "WIPRO", "M&M", "RELIANCE", "HUL"
    ];

    const liveWatchlist = await Promise.all(
      watchlistNames.map(async (name) => {
        const liveData = await fetchLivePrice(name);
        if (liveData) {
          return {
            name,
            price: liveData.price,
            percent: liveData.day,
            isDown: liveData.isLoss,
          };
        }
        return null;
      })
    );

    res.json(liveWatchlist.filter(Boolean));
  } catch (err) {
    console.error("Error fetching watchlist:", err);
    res.status(500).json({ message: "Failed to fetch watchlist" });
  }
});

// ✅ Save new order — user specific
app.post("/newOrder", verifyToken, async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ message: "All order fields are required" });
    }
    let newOrder = new OrderModel({
      userId: req.userId,
      name,
      qty,
      price,
      mode,
    });
    await newOrder.save();
    res.status(201).json({ message: "Order saved successfully" });
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).json({ message: "Failed to save order" });
  }
});

// ✅ Get orders — only for logged in user
app.get("/allOrders", verifyToken, async (req, res) => {
  try {
    let allOrders = await OrderModel.find({ userId: req.userId });
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});





app.get("/getUser", verifyToken, async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId).select("-password"); // ← don't send password
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user, success: true });
  } catch (err) {
    console.error("Error fetching user:", err);
    res.status(500).json({ message: "Failed to fetch user" });
  }
});



// ✅ Logout — clear cookie
app.get("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: false,
    expires: new Date(0),  // ← expire cookie immediately
  });
  res.status(200).json({ message: "Logged out successfully", success: true });
});






// ✅ Auth routes
app.use("/", authRoute);

// ✅ Unknown routes — must be LAST
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.listen(PORT, () => {
  console.log("App Started.");
  mongoose.connect(url);
  console.log("DB connected.");
});