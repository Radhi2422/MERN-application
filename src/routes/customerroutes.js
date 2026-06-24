const express = require("express");

const router = express.Router();

const {
    createCustomer,
    getCustomer,
    getCustomerById,
    deleteCustomer
}= require("../controllers/customerController.js")

router.post("/add-customer", createCustomer);

// console.log("Hi");
router.get("/get", getCustomer);

router.get("/:id", getCustomerById);

router.delete("/:id", deleteCustomer);

module.exports = router;