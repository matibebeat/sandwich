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

router.put('/sandwich/:id', (req, res) => {
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




router.post('/profile/register', (req, res) => {
    const user = new Schemas.User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        address: req.body.address,
        phone: req.body.phone,
        isAdmin: false,
    });
    user.save().then((data) => {
        res.status(200).json({ message: "user added successfully" });
    }).catch((err) => {
        res.status(500).send(err.message);
    });
}
);

router.post('/profile/login', (req, res) => {

    Schemas.User.findOne({ email: req.body.email }).then((user) => {
        console.log(req.body.password);
        if (user.password === req.body.password) {
            console.log(user);
            res.status(200).send(user);
        }
        else {
            res.status(500).json({ message: "user not found" });
        }
    }).catch((err) => {
        res.status(500).send(err.message);
    });
}
);

router.get('/profile/:id', (req, res) => {
    console.log(req.params.id);
    Schemas.User.findById(req.params.id).then((user) => {
        res.json(user);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
}
);

router.put('/profile/:id', (req, res) => {
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

router.delete('/profile/:id', (req, res) => {
    Schemas.User.findByIdAndDelete(req.params.id).then((user) => {
        res.json(user);
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