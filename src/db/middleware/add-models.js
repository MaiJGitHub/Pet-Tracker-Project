const Pets = require('../models/pets');

const addModels = (req, res, next) => {
    req.Pets = Pets;
    next();
};

module.exports = addModels;