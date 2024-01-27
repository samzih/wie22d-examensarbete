// Include modules
const express = require('express');
const cors = require('cors');
const cookieSession = require('cookie-session');

// Include routers
const productRouter = require('./routes/ProductRouter');
const checkoutRouter = require('./routes/CheckoutRouter');
const userRouter = require('./routes/UserRouter');
const orderRouter = require('./routes/OrderRouter');


const app = express();


// Middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
}));

app.use(express.json());

app.use(cookieSession({
    name: 'session',
    keys: ['s3cR3tK3y'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'strict',
    secure: false,
    httpOnly: true
}));


// Routers
app.use('/api/products', productRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);


module.exports = app;
