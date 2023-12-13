//barrel file here for all routes
const express = require('express');
const petCreate = require('./controllers/create');
const petList = require('./controllers/list');
const petDestory = require('./controllers/destroy');
// const addModels = require('./middleware/add-models');

const router = express.Router();

// router.use(addModels);

router.post('/api/pets', petCreate);
router.get('/api/petsList', petList);
router.delete('/api/pets/:id', petDestory);

module.exports = router;