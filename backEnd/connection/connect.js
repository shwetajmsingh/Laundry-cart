const mongoose = require("mongoose");

const main = async () => {
  await mongoose.connect(
    "mongodb+srv://laundrycart:laundrycart@cluster0.xdbecof.mongodb.net/data?retryWrites=true&w=majority"
    // "mongodb://localhost:27017/laundry-service"
  );
  console.log("Database connected");
};

module.exports = main;
