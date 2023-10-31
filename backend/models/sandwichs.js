const mongoose = require('mongoose');
const sandwichSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    bread: {
        type: String,
        required: true
    },
    meat: {
        type: String,
        required: true
    },
    cheese: {
        type: String,
        required: true
    },
    toppings: {
        type: String,
        required: true
    },
    condiments: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
});
const sandwiches = mongoose.model('sandwiches', sandwichSchema);
module.exports = sandwiches
