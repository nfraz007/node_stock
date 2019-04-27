const Stocks = require('../models/stocks.model');

module.exports = {
    get: function (req, res) {
        try {
            Stocks.find().limit(10).exec(function (error, stocks) {
                if(error) throw next(error);

                res.send({
                    status: true,
                    message: "Successfully get the data.",
                    stocks: stocks
                })
            })
        }catch(e){
            res.send({
                status: false,
                message: e
            })
        }
    },
    company_search: function(req, res) {
        try {
            var company_name = req.query.companyName;

            if(!company_name) throw "Company name is required.";

            Stocks.find({symbol: company_name}).exec(function(error, stocks) {
                res.send({
                    status: true,
                    message: "Successfully get the data.",
                    stocks: stocks
                })
            });
        }catch(e){
            res.send({
                status: false,
                message: e
            })
        }
    },
    time_frame: function (req, res) {
        try {
            var from = req.query.from;
            var to = req.query.to;

            if(!from || !to) throw "From or To Date is required.";
            
            Stocks.find({date: {$gte: (new Date(from)), $lte: (new Date(to))}}).exec(function(error, stocks){
                res.send({
                    status: true,
                    message: "Successfully get the data.",
                    stocks: stocks
                })
            });
        }catch(e){
            res.send({
                status: false,
                message: e
            })
        }
    },
    stocks_in_time: function(req, res) {
        try {
            var companyName = req.query.companyName;
            var from = req.query.from;
            var to = req.query.to;

            if(!companyName || !from || !to) throw "All data required.";

            Stocks.find({symbol: companyName, date: {$gte: (new Date(from)), $lte: (new Date(to))}}).exec(function(erroe, stocks){
                res.send({
                    status: true,
                    message: "Successfully get the data.",
                    stocks: stocks
                })
            });
        }catch(e){
            res.send({
                status: false,
                message: e
            })
        }
    },
    ticker_search: function(req, res) {
        try {
            res.send({
                status: true,
                message: "I didnt get what is it saying."
            })
        }catch(e){
            res.send({
                status: false,
                message: e
            })
        }
    }
}