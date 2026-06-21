console.log("app.js loaded")
const express = require("express");
const cors = require("cors");

const authRoutes =require("../routes/authRoutes");
const productRoutes = require("../routes/productroutes");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/products", productRoutes);

module.exports = app;