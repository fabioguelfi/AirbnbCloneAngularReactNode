const express = require('express');
const app = express();

app.get('/rentals', (req, res) => {
    res.json({ 'success': true })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('i am running')
});