// Include modules
const express = require('express');
const cors = require('cors');


// Include routers
const productRouter = require('./routes/ProductRouter');
const checkoutRouter = require('./routes/CheckoutRouter');


const app = express();


// Middleware
app.use(cors({
    origin: process.env.CLIENT_URL,
}));
app.use(express.json());


// Routers
app.use('/api/products', productRouter);
app.use('/api/checkout', checkoutRouter);


module.exports = { app }
