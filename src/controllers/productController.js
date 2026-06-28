const product =
require("../models/productSchema.js");

exports.createProduct =
async(req,res)=>{

    const Product =
        await product.create(req.body);
    res.status(201).json(Product);
};
exports.getProduct = async (req, res) => {
  try {
    const products = await product.find({});
console.log(products);

    return res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Error fetching products",
      error: error.message,
    });
  }
};

exports.getProductById =
async(req,res)=>{

    const Product =
        await product.findById(
            req.params.id
        );

    res.json(Product);
};

exports.deleteProduct =
async(req,res)=>{

    await product.findByIdAndDelete(
        req.params.id
    );

    res.json({
        message:"Product deleted"
    });
};