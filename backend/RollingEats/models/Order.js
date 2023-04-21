const { Schema, model } = require("mongoose");
const { format } = require('date-fns');

const OrderSchema = Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  date: {
    type: String,
    default: () => format(new Date(), 'dd/MM/yyyy'),
    required: true
  },
  menu: {
    type: Schema.Types.ObjectId,
    ref: "Menu",
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