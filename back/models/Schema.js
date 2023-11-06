const mongoose = require('mongoose');

const SandwichSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    ingredients: {type: String, required: true},
});
const OrderSchema = mongoose.Schema({
    idUser: {type: String, required: true},
    Sandwichs : {type: Array, required: true},
    price: {type: Number, required: true},
    date: {type: Date, required: true},
});
const Sandwich = mongoose.model('sandwichs', SandwichSchema);
const Order = mongoose.model('orders', OrderSchema);

const MySchema = {"Sandwich": Sandwich, "Order"  : Order};

module.exports = MySchema;