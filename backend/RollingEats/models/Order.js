const { Schema, model } = require("mongoose");

const OrderSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: Number,
    default: 0,
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: "Menu",
    required: true,
  },  
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = model("Order", OrderSchema);