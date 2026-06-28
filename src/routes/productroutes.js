const express = require("express");
const authMiddleware=require("../middleware/authMiddleware.js");
const permissionMiddleware=require("../middleware/permissionMiddleware.js");

const router = express.Router();

const {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct
}

= require("../controllers/productController.js");
// router.post("/add-product", createProduct);
router.post("/add-product",authMiddleware,permissionMiddleware("CREATE_PRODUCT"),createProduct);

// router.get("/get", getProduct);
router.get("/products",authMiddleware,permissionMiddleware("VIEW_PRODUCT"),getProduct);
router.get("/:id", getProductById);
router.delete("/delete-product/:id",authMiddleware,permissionMiddleware("DELETE_PRODUCT"),deleteProduct);

// router.delete("/:id", deleteProduct);

module.exports = router;