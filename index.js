const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const mongodb_url = require("./config");

const app = express();

// db connection
const mongodb = process.env.MONGODB_URI || mongodb_url;
mongoose.connect(mongodb, {useNewUrlParser: true});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// middleware
app.use(bodyParser.json());
app.use(cors());

// api routes
const stocks = require('./routes/stocks.route');
app.use("/api/stocks", stocks);

const port = process.env.PORT || 5001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})