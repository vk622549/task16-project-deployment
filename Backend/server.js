const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.get("/api/students", (req, res) => {
  res.json([
    { id: 1, name: "Vinayak" },
    { id: 2, name: "Rahul" }
  ]);
});

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});