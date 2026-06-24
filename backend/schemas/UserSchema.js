const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = { UserSchema };