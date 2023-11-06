const express = require('express');
const router = express.Router();
const Schemas = require('../models/Schema.js');
const { SchemaTypeOptions } = require('mongoose');
const path = require("path");
const axios = require('axios');
const { request } = require('express');
const bodyParser = require('body-parser');
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
    next();});

router.get('/', (req, res) => {
    res.end('This is my root API http response');});
router.get('/sandwiches', (req, res) => {
    Schemas.Sandwich.find().then((sandwiches) => {
        res.json(sandwiches);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
});

router.get('/order/:id', (req, res) => {
    /*return qll the orders in mongodb that have the id in userId*/
    Schemas.Order.find({idUser: req.params.id}).then((orders) => {
        for(let i = 0; i < orders.length; i++) {
            for(let j = 0; j < orders[i].Sandwichs.length; j++) {
                Schemas.Sandwich.findById(orders[i].Sandwichs[j].idSandwich).then((sandwich) => {
                    orders[i].Sandwichs[j].name = sandwich.name;
                    orders[i].Sandwichs[j].image = sandwich.image;
                }).catch((err) => {
                    res.status(500).send(err.message);
                });
            }
        }
        res.json(orders);
    }
    ).catch((err) => {
        res.status(500).send(err.message);
    });
}
);

module.exports = router;