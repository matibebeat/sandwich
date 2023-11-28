const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const Schemas = require("../../models/Schema");
router.post('/login', (req, res) => {

        Schemas.User.findOne({ email: req.body.email }).then((user) => {
            if (user.password === req.body.password) {
                console.log(user);
                const token = jwt.sign({ user : user }, "secret", { expiresIn: 86400 });

                console.log(token);
                res.status(200).send(token);
            }
            else {
                res.status(500).json({ message: "user not found" });
            }
        }).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);

router.post('/register', (req, res) => {
        const user = new Schemas.User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
            isAdmin: false,
        });
        user.save().then((data) => {
            res.status(200).json({ message: "user created"});
        }).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);





router.get('/:id', (req, res) => {
        Schemas.User.findById(req.params.id).then((user) => {
            const token = jwt.sign({ user : user }, "secret", { expiresIn: 86400 });
            res.json(token);
        }).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);

router.put('/:id', (req, res) => {
        Schemas.User.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            address: req.body.address,
            phone: req.body.phone,
            isAdmin: false,
        }, { new: true }).then((user) => {
            res.json(user);
        }).catch((err) => {
            res.status(500).send(err.message);
        });

    }
);

router.delete('/:id', (req, res) => {
        Schemas.User.findByIdAndDelete(req.params.id).then((user) => {
            res.json(user);
        }).catch((err) => {
            res.status(500).send(err.message);
        });
    }
);

module.exports = router;