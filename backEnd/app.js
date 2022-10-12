const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
const DbConnnection = async (req, res) => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
  } catch (e) {
    console.log(e);
    console.log("Connection failed");
  }
};
DbConnnection();

app.listen(port, () => console.log(`Server is listening at port ${port}`));
