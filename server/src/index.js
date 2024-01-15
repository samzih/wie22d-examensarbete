// Include modules
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');


// Include routers
const productRouter = require('./routes/ProductRouter');
const checkoutRouter = require('./routes/CheckoutRouter');


const app = express();


// Middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
}));

app.use(express.json());


// Routers
app.use('/api/products', productRouter);

app.use('/api/checkout', checkoutRouter);


app.listen(process.env.PORT || 3000, () => {
    console.log('Server up & running on port 3000...');
});
