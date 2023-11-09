const express = require('express');

const router = express.Router();

const Schemas = require("../../models/Schema");

router.get('/', (req, res) => {
        Schemas.Review.find().then((reviews) => {
            res.json(reviews);
        }).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);

module.exports = router;