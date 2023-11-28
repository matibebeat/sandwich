const express = require('express');

const router = express.Router();

const Schemas = require("../../models/Schema");

router.get('/', (req, res) => {
    Schemas.Sandwich.find().then((sandwiches) => {
        res.json(sandwiches);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
});
router.post('/', (req, res) => {
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
router.get('/:id', (req, res) => {
        Schemas.Sandwich.findById(req.params.id).then((sandwich) => {
            res.json(sandwich);
        }).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);

router.put('/:id', (req, res) => {
        Schemas.Sandwich.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.body.image,
            ingredients: [1,2,3]
        }, { new: true }).then((sandwich) => {
            res.json(sandwich);
        }).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);

router.delete('/:id', (req, res) => {
        Schemas.Sandwich.findByIdAndDelete(req.params.id).then((sandwich) => {
            res.json(sandwich);
        }).catch((err) => {
            res.status(500).send(err.message);
        });
    }



);
module.exports = router;