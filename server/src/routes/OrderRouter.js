const express = require('express');
const router = express.Router();
const { getOrders } = require('../controllers/OrderController');
const auth = require('../middlewares/authMiddleware');


router.get('/user', auth, getOrders);


module.exports = router;
