const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }, // hashed password
  name: { first: String, last: String },
  addresses: [
    {
      label: String,
      city: String,
      state: String,
      pincode: String,
      country: String,
      isDefault: Boolean,
    },
  ],
  avatar: { url: String, alt: String },
});

module.exports = mongoose.model("User", UserSchema);
