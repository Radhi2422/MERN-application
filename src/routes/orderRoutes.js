const express = require("express");

const router = express.Router();



const {
    getOrders
}= require("../controllers/orderController.js")

// router.post("/add-customer", createCustomer);

// // console.log("Hi");
router.get("/get", getOrders);

// router.get("/:id", getCustomerById);

// router.delete("/:id", deleteCustomer);

module.exports = router;