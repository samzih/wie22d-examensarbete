const express = require('express');
const router = express.Router();
const { initStripeSession } = require('../controllers/CheckoutController');


router.post('/create-session', initStripeSession);


module.exports = router;
