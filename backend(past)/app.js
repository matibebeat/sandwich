const express = require('express');
const mongoose = require('mongoose');


/*mango db*/
mongoose.connect('mongodb+srv://root:JSoNRMEYj1VITFB7@sandwich.ellrjep.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


/* models  */



const app = express();
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/User');
const sandRoutes = require('./routes/sandwichs');


app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/sandwichs', sandRoutes);



module.exports = app;