const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StocksSchema = new Schema({
    date: Date,
    symbol: String,
    open: Number,
    close: Number,
    low: Number,
    high: Number,
    volumn: Number
});


// Export the model
module.exports = mongoose.model('Stocks', StocksSchema);