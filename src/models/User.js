const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
  userId: {
 name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        unique:true,
        required:true
    },

    password:{
        type:String,
        required:true
    },

    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Role",
        required:true
    },

    isActive:{
        type:Boolean,
        default:true
    }
  }
},{
    timestamps:true
},
{
    collection: "User"
}
);
// const User = mongoose.model("User", userSchema);
// console.log(User.collection.name);
const collections = mongoose.connection.readyState //db.listCollections().toArray();  //listCollections().toArray();

// console.log(collections.map(c => c.name));
module.exports = mongoose.model("User", userSchema);