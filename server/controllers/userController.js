const User = require("../models/User");

exports.getUsers = async (req, res) => {
  res.json(await User.find());
};

exports.createUser = async (req, res) => {
  res.json(await User.create(req.body));
};
// exports.deleteUser = async (req, res) => {
//   try {
//     const userId = req.params.id;
//     const deletedUser = await User.findByIdAndDelete(userId);

//     if (!deletedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// };
