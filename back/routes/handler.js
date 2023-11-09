const express = require('express');
const router = express.Router();
const axios = require('axios');
const { request } = require('express');
const bodyParser = require('body-parser');
const profileRoute = require('./routes/profile.js');
const orderRoute = require('./routes/order.js');
const sandwichRoute = require('./routes/sandwich.js');
const reviewRoute = require('./routes/review.js');
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    next();});

router.get('/', (req, res) => {
    res.end('This is my root API http response');});

router.use('/profile', profileRoute);
router.use('/review', reviewRoute);
router.use('/sandwich', sandwichRoute);
router.use('/order', orderRoute);

module.exports = router;