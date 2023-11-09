const express = require('express');

const router = express.Router();

const Schemas = require("../../models/Schema");

router.get('/:id', (req, res) => {
        /*return qll the orders in mongodb that have the id in userId*/
        Schemas.Order.find({idUser: req.params.id}).then((orders) => {
                res.json(orders);
            }
        ).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);

router.get('/', (req, res) => {
        Schemas.Order.find().then((orders) => {
                res.json(orders);
            }
        ).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);

module.exports = router;