const mongoose = require('mongoose');

const main = async () => {
  await mongoose.connect(
    'mongodb+srv://laundrycart:laundrycart@cluster0.xdbecof.mongodb.net/data?retryWrites=true&w=majority'
  );
  console.log('Database connected');
};

module.exports = main;
