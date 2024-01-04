const express = require('express');
const router = express.Router();
const { getActiveProducts } = require('../controllers/ProductController');


router.get('/', getActiveProducts);


module.exports = router;
