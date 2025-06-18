// server.js
const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");
const app = express();

const NEWS_API_KEY = "2fe1467d127a42ee92288e1536f29ea5";

app.use(cors()); // allow frontend to call this server

app.get("/api/news", async (req, res) => {
  const query = req.query.q || "pakistan";
  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

app.listen(3000, () => {
  console.log("Backend running at http://localhost:3000");
});
