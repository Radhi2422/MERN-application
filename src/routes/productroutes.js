const express = require("express");

const router = express.Router();

const {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
}

= require("../controllers/productController.js");
router.post("/add-product", createProduct);

console.log("Hi");
router.get("/get", getProduct);

router.get("/:id", getProductById);

router.delete("/:id", deleteProduct);

module.exports = router;