const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const routehandler = require('./routes/handler.js');
const mongoose = require('mongoose');
const Schema= require('./models/Schemas.js');

const{SchemaTypeOptions}=require('mongoose');

require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routehandler);



mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log('DB Connected');
}).catch((err) => {
    console.log(err);
});



const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

