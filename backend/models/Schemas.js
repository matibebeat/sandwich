const mongoose = require('mongoose');
const custSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: false
    },
    status: {
        type: String,
        required: false
    },
});
const purchSchema = new mongoose.Schema({ product: { type: String, required: true }, qty: { type: Number, required: true }, price: { type: String, required: true } }); 
const customers = mongoose.model('customers', custSchema); 
const purchases = mongoose.model('purchases', purchSchema); 
const mySchemas = { 'customers': customers, 'purchases': purchases }; 
module.exports = mySchemas