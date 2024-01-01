// Include modules
const express = require('express');
const dotenv = require('dotenv').config();


const app = express();


// Middlewares
app.use(express.json());


app.listen(process.env.PORT || 3000, () => {
    console.log('Server up & running on port 3000...');
});
