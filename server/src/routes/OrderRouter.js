const express = require('express');
const router = express.Router();
const { getOrders, getAllOrders, markAsSent } = require('../controllers/OrderController');
const auth = require('../middlewares/authMiddleware');
const adminAuthorization = require('../middlewares/authorizationMiddleware');


router.get('/user', auth, getOrders);
router.get('/', auth, adminAuthorization, getAllOrders);
router.patch('/:orderId', auth, adminAuthorization, markAsSent);


module.exports = router;
