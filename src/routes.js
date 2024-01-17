//barrel file here for all routes
const express = require('express');
const petCreate = require('./db/controllers/create');
const petList = require('./db/controllers/list');
const petDestory = require('./db/controllers/destroy');

const router = express.Router();


router.post('/api/pets', petCreate);
router.get('/api/petsList', petList);
router.delete('/api/pets/:id', petDestory);

module.exports = router;