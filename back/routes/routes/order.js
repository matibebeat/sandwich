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
        /*get all the orders from he newest to the oldest and only if status is "Waiting"*/
        Schemas.Order.find({status: "Waiting"}).sort({date: -1}).then((orders) => {
                res.json(orders);
            }
        ).catch((err) => {
            res.status(500).send(err.message);
        });
});


router.post('/', (req, res) => {
        const order = new Schemas.Order({
            idUser: req.body.user,
            price: req.body.price,
            Sandwichs: req.body.Sandwichs,
            date: req.body.date,
            status: "Waiting",
        });
        console.log(order);
        order.save().then((data) => {
                res.json(data);
            }
        ).catch((err) => {
            res.status(500).send(err.message);
        }
        );
    }
);

router.post('/send/:id', (req, res) => {
        /*change the status of the order to "Sent"*/
        Schemas.Order.findByIdAndUpdate(req.params.id, {status: "Sent"}).then((data) => {
                res.json(data);
            }
        ).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);


module.exports = router;