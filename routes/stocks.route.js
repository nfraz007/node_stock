const express = require('express');
const router = express.Router();

const stocks_controller = require('../controllers/stocks.controller');

router.get('/', stocks_controller.get);
router.get('/companySearch', stocks_controller.company_search);
router.get('/timeFrame', stocks_controller.time_frame);
router.get('/stocksInTime', stocks_controller.stocks_in_time);
router.get('/tickerSearch', stocks_controller.ticker_search);

module.exports = router;