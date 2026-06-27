const mongoose=require("mongoose");

const roleSchema=new mongoose.Schema({

    roleName:{
        type:String,
        unique:true
    },

    permissions:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Permission"
    }]

});

module.exports=mongoose.model("Role",roleSchema);