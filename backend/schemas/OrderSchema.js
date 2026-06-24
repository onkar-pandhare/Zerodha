const { Schema } = require("mongoose");

const OrderSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,          // ← link order to user
  },
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  orderTime: {
    type: Date,
    default: Date.now,       // ← track when order was placed
  },
});

module.exports = { OrderSchema };