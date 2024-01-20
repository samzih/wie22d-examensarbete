const express = require('express');
const router = express.Router();
const { initStripeSession, verifyStripeOrder } = require('../controllers/CheckoutController');
const auth = require('../middlewares/authMiddleware');


router.post('/create-session', auth, initStripeSession);
router.get('/verify-order', verifyStripeOrder);


module.exports = router;
