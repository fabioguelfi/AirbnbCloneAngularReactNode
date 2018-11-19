const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/dev');
const FakeDB = require('./models/fake-db');
const rentalRoutes = require('./routes/rentals');

mongoose.connect(config.DB_URI).then(() => {
    const fakeDB = new FakeDB();
    fakeDB.seedDB();
})

app.use('/api/v1/rentals', rentalRoutes)

const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
    console.log('i am running')
});