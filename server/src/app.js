// Include modules
const express = require('express');
const cors = require('cors');


// Include routers
const productRouter = require('./routes/ProductRouter');
const checkoutRouter = require('./routes/CheckoutRouter');
const userRouter = require('./routes/UserRouter');


const app = express();


// Middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
}));
app.use(express.json());


// Routers
app.use('/api/products', productRouter);
app.use('/api/checkout', checkoutRouter);
app.use('/api/users', userRouter);


module.exports = app;
