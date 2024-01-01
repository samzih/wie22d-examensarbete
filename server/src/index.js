// Include modules
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');


const app = express();


// Middlewares
app.use(cors({
    origin: process.env.CLIENT_URL,
}));

app.use(express.json());


app.listen(process.env.PORT || 3000, () => {
    console.log('Server up & running on port 3000...');
});
