const Sandwichs = require('../models/sandwichs');

exports.createSandwich = (req, res, next) => {
    const sandwich = new Sandwichs({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    sandwich.save().then(
        () => {
            res.status(201).json({
                message: 'Sandwich saved successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getOneSandwich = (req, res, next) => {
    Sandwichs.findOne({
        _id: req.params.id
    }).then(
        (sandwich) => {
            res.status(200).json(sandwich);
        }
    ).catch(
        (error) => {
            res.status(404).json({
                error: error
            });
        }
    );
}

exports.modifySandwich = (req, res, next) => {
    const sandwich = new Sandwichs({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        price: req.body.price,
        userId: req.body.userId
    });
    Sandwichs.updateOne({ _id: req.params.id }, sandwich).then(
        () => {
            res.status(201).json({
                message: 'Sandwich updated successfully!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.deleteSandwich = (req, res, next) => {
    Sandwichs.deleteOne({ _id: req.params.id }).then(
        () => {
            res.status(200).json({
                message: 'Deleted!'
            });
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}

exports.getAllSandwichs = (req, res, next) => {
    Sandwichs.find().then(
        (sandwichs) => {
            res.status(200).json(sandwichs);
        }
    ).catch(
        (error) => {
            res.status(400).json({
                error: error
            });
        }
    );
}