const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const { app } = require('./app');


main().catch(err => console.log(err));

async function main() {

    console.log('Connection to MongoDB opened ✔️');
    mongoose.set('strictQuery', true);
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'bytebreeze-db' });

    app.listen(process.env.PORT, () => {
        console.log(`Server up & running on port ${process.env.PORT}...`);
    });

}
