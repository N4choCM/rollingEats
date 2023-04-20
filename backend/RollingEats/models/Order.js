const { Schema, model } = require("mongoose");

const OrderSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  date: {
    type: Date,
    default: 0,
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: "Menus",
    required: true,
  },
  //! This parameter is used to change the orders from 'pending' to 'delivered'
  //! Thus, true = delivered and false = pending.
  delivered: {
    type: Boolean,
    required: true,
    default: false,
  },  
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
});

module.exports = model("Order", OrderSchema);