const express = require('express');

const router = express.Router();

const Schemas = require("../../models/Schema");


const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../frontend/src/uploads/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    },
});

const upload = multer({ storage: storage });

router.use('/uploads', express.static('uploads'));




router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    const fileName = req.file.filename;
    const filePath = req.file.path.replace(/\\/g, '/');

    /*delete the '../frontend/' from filepath*/
    const filePath2 = filePath.replace('../frontend/', '');

    const sandwich = new Schemas.Sandwich({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: filePath2,
        ingredients: req.body.ingredients,
    });
    sandwich.save().then((data) => {
        res.json(data);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
});

router.get('/', (req, res) => {
    Schemas.Sandwich.find().then((sandwiches) => {
        res.json(sandwiches);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
});
router.post('/', (req, res) => {
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
router.get('/:id', (req, res) => {
    Schemas.Sandwich.findById(req.params.id).then((sandwich) => {
        res.json(sandwich);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
}
);

router.put('/:id', (req, res) => {
    Schemas.Sandwich.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        image: req.body.image,
        ingredients: [1, 2, 3]
    }, { new: true }).then((sandwich) => {
        res.json(sandwich);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
}
);

router.delete('/:id', (req, res) => {
    Schemas.Sandwich.findByIdAndDelete(req.params.id).then((sandwich) => {
        res.json(sandwich);
    }).catch((err) => {
        res.status(500).send(err.message);
    });
}



);
module.exports = router;