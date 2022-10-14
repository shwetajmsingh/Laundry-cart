const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, required: true, unique: true },
  state: { type: String, required: true },
  district: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: Number, required: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const registerDb = mongoose.model('registerDb', registerSchema);
module.exports = registerDb;
