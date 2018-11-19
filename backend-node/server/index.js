const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/dev');
const Rental = require('./models/rental');

mongoose.connect(config.DB_URI)

app.get('/rentals', (req, res) => {
    res.json({ 'success': true })
})

const PORT = process.env.PORT || 3007;

app.listen(PORT, () => {
    console.log('i am running')
});