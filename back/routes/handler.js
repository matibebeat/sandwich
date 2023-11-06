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
router.get('/sandwich', (req, res) => {
    Schemas.Sandwich.find().then((sandwiches) => {
        res.json(sandwiches);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
});
router.post('/sandwich', (req, res) => {
    const sandwich = new Schemas.Sandwich({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        ingredients: req.body.ingredients,
    });
    sandwich.save().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
}
);
router.get('/sandwich/:id', (req, res) => {
    Schemas.Sandwich.findById(req.params.id).then((sandwich) => {
        res.json(sandwich);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
}
);

router.get('/order/:id', (req, res) => {
    /*return qll the orders in mongodb that have the id in userId*/
    Schemas.Order.find({idUser: req.params.id}).then((orders) => {
        res.json(orders);
    }
    ).catch((err) => {
        res.status(500).send(err.message);
    });
}
);

router.get('/order', (req, res) => {
    Schemas.Order.find().then((orders) => {
        res.json(orders);
    }
    ).catch((err) => {
        res.status(500).send(err.message);
    });
}
);

module.exports = router;