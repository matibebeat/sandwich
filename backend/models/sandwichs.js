const mongoose = require('mongoose');

const sandwichSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    ingredients: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    InStock: { type: Number, required: true },
});

module.exports = mongoose.model('Sandwich', sandwichSchema);