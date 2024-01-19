const express = require('express');
const router = express.Router();
const { initStripeSession } = require('../controllers/CheckoutController');
const auth = require('../middlewares/authMiddleware');


router.post('/create-session', auth, initStripeSession);


module.exports = router;
