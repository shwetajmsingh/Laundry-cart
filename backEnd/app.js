const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connectDB = require('./connection/connect');
const PORT = process.env.PORT || 5000;
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();
//database connection
connectDB();

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use('/api/v1', require('./routes/orderRoute'));
app.use('/api/v1', require('./routes/userRoute'));

//listen
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
