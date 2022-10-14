const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  orderId: { 
    type: String,
     required: true 
    },
  orderTimeDate: {
     type: String, 
     required: true 
    },
  storeLocation: {
     type: String,
      required: true 
    },
  city: { 
    type: String,
     required: true 
    },
  storePhone: { 
    type: Number, 
    required: true 
  },
  totalItems: { 
    type: Number,
     required: true
     },
  price: { 
    type: Number,
     required: true
     },
  status: { 
    type: String,
     default: "Ready to Pickup"
     },
  popUp: { 
    type: Object,
     required: true
     },
  user: { 
    type: String, 
    required: true 
  },
});

const Order = mongoose.model("orders", OrdersSchema);

module.exports = Order;
