const mongoose = require('mongoose');

const SandwichSchema = mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    image: {type: String, required: true},
    ingredients: {type: Array, required: true},
});
const OrderSchema = mongoose.Schema({
    idUser: {type: String, required: true},
    Sandwichs: {type: Array, required: true},
    price: {type: Number, required: true},
    date: {type: Date, required: true},
    status : {type: String, required: true},
});
const UserSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type:String, required: true},
    address: {type: String, required: true},
    phone: {type: String, required: true},
    isAdmin: {type: Boolean, required: true},

});
const ReviewSchema = mongoose.Schema({
    name: {type: String, required: true},
    content: {type: String, required: true},
    date: {type: Date, required: true},
    grade: {type: Number, required: true},
});

const Sandwich = mongoose.model('sandwichs', SandwichSchema);
const Order = mongoose.model('orders', OrderSchema);
const User = mongoose.model('users', UserSchema);
const Review = mongoose.model('reviews', ReviewSchema);

const MySchema = {"Sandwich": Sandwich, "Order"  : Order, "User": User, "Review": Review};

module.exports = MySchema;