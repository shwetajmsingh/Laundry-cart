const mongoose = require("mongoose");

const schema = mongoose.Schema;

const orderSchema = new schema({
  orderId: {
    type: String,
    required: true,
  },
  orderDateTime: {
    type: String,
    required: true,
  },
  storeLocation: {
    type: String,
    required: true,
  },
  storePhone: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  totalItem: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
});

const OrderDetails = mongoose.model("order", orderSchema);
module.exports = OrderDetails;
