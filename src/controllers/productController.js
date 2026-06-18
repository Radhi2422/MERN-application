const product =
require("../models/productSchema.js");

exports.createProduct =
async(req,res)=>{

    const Product =
        await product.create(req.body);

    res.status(201).json(Product);
};

exports.getProduct =
async(req,res)=>{

    try{
        const {name}=req.query;
        let products;
        if(name){
            products=await product.find({
                name:{$regex:name,$options:"i"}
            })
        }
        else{
            products=await product.find();
        }
        res.status(500).json({
            success:true,
            count:products.length,
            products
        });
    }catch(error){
        console.log(error);
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