const User = require("../models/User");

exports.login = async (req, res) => {
  try {

    const { userId, password } = req.body;
//     console.log(userId,password);
//     const users = await User.find();
// console.log(users);
const count = await User.countDocuments();

console.log("Count:", count);

    const user = await User.findOne({ userId });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found"
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password"
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful",
      role: user.role
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};