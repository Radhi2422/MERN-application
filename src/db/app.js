console.log("app.js loaded")
const express = require("express");
const cors = require("cors");

 const productRoutes = require("../routes/productroutes");

const app = express();
app.use(cors());

app.use(express.json());
app.use("/products", productRoutes);

module.exports = app;