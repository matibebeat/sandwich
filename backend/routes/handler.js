const express = require('express');
const router = express.Router();//const 
const path = require("path");
const axios = require('axios');
const { request } = require('express');
const bodyParser = require('body-parser');
const Schema = require('../models/Schemas.js');
const sandwiches = require('../models/Sandwiches.js');

const { SchemaTypeOptions } = require('mongoose');

require('dotenv').config();


router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With,Content-Type,Accept');
    next();
}
);
router.get('/', (req, res) => {
    res.send("Hello World");

});

router.get('/prods', (req, res) => {
    const responseObject = {
        message: "This is a json response",
        data:{
            items: [
                { id:1, name:"item1", price:100},
                { id:2, name:"item2", price:200},
                { id:3, name:"item3", price:300},
            ]
        }
};
    res.json(responseObject);
} );

router.get('/cust', (req, res) => {
    const responseObject = {
        message: "This is a json response",
        data:{
            items: [
                { id:1, name:"customer1"},
                { id:2, name:"customer2"},
                { id:3, name:"customer3"}
            ]
        }
    };
    res.json(responseObject);
} );

router.get('/fetchproducts',async (req, res) => {
    try{
        const purchases = Schema.purchases;
        const products = await purchases.find({}).exec();

        if(products){
            res.end(JSON.stringify(products));
            console.log(products);
        }else{
            res.end();
        }
    }catch(err){
        console.log(err);
        res.status(500).send('internal error');
    }

});

router.get('/fetchcustomers',async (req, res) => {
    try{
        const customers = Schema.customers;
        const cust = await customers.find({}).exec();

        if(cust){
            res.end(JSON.stringify(cust));
            console.log(cust);
        }else{
            res.end();
        }
    }catch(err){
        console.log(err);
        res.status(500).send('internal error');
    }

}
);

router.get('/sandwiches', (req, res) => {
    const sandwiches = sandwiches.sandwiches;
    sandwiches.find({}).exec((err, data) => {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(data));
            console.log(data);
        }
    });
}
);

router.post('/insertdata',(req, res) => {

    const customers = new Schema.customers({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        city: req.body.city,
        status: "active"
    });

    customers.save().then(data => {
        console.log("data inserted");
    }).catch(err => {
        res.status(500).json({
            error: err
        });
    });
    })

    router.delete('/deletecustomer/:id', async (req, res) => {
        try{
            const customerId = req.params.id;

            const deletedCustomer = await Schema.customers.findByIdAndDelete(customerId).exec();

            if(deletedCustomer){
                res.end(JSON.stringify(deletedCustomer));
                console.log(deletedCustomer);
            } else{
                res.status(404).send('not found');
            }
        }catch(err){
            console.log(err);
            res.status(500).send('internal error');
        }
    }
    );

    router.put('/updatecustomer/:id', async (req, res) => {
        try{

            const customerId = req.params.id;
            const upadates = req.body;

            const updatecustomer = await Schema.customers.findByIdAndUpdate(customerId, upadates).exec();
            if(updatecustomer){
                res.end(JSON.stringify(updatecustomer));
                console.log(updatecustomer);
            }
            else{
                res.status(404).send('not found');
            }
        }catch(err){
            console.log(err);
            res.status(500).send('internal error');

        }
    }
    );
module.exports = router;