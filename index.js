const express = require('express');
const cors = require('cors');
const app = express();
// const port = process.env.PORT || 5000 // অনেকে এই ভাবে port লেখে।
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is running') // response পাঠানো জন্য
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log(`Dragon API is Running on port: ${port}`)
})