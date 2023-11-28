const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routesHandler = require('./routes/handler.js');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', routesHandler);
mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Connected to database!");

}).catch(err => {
    console.log("Cannot connect to database!", err);
    process.exit();

}
);




const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}
);