const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../api documentation/swagger.js");

const authRoutes =require("../routes/authRoutes");
const productRoutes = require("../routes/productroutes");
const customerRoutes = require("../routes/customerroutes");
const orderRoutes = require("../routes/orderRoutes");

const requestLogger = require("../logs/requestLogger.js");

const app = express();
app.use(cors());

app.use(express.json());
// app.use(requestLogger);
app.use("/api/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/orders",orderRoutes);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec)
);

module.exports = app;