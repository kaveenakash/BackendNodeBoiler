const express = require('express');
const router = express.Router();

//Import controller
const {getData,insertData} = require('../controllers/controller');

router.get('/all-data',getData);
router.post('/insert-data',insertData);
module.exports = router;
