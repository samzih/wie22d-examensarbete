const express = require('express');
const router = express.Router();
const { getActiveProducts, getProduct } = require('../controllers/ProductController');


router.get('/', getActiveProducts);

router.get('/:id', getProduct);


module.exports = router;
