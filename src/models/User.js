const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
  userId: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  }
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