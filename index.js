const express = require('express');
const cors = require('cors');

const app = express();
// const port = process.env.PORT || 5000 // অনেকে এই ভাবে port লেখে।
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');
const news = require('./data/news.json');
app.use(cors())

app.get('/', (req, res) => {
    res.send('Dragon is running') // response পাঠানো জন্য
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/news', (req, res) => {
    res.send(news)
})
// id wise news পাওয়ার জন্য।
app.get('/news/:id', (req, res) => {
    const id = req.params.id; // req এর মধ্যে params এর মধ্যে id টাকে পাওয়া যাবে।
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews);
})

//category wise news পাওয়ার জন্য।
//প্রতিটি নিউজে একটি news category id আছে সে অনুযায়ী নিউজ গুলো ভাগ করতে হবে।
app.get('/categories/:id', (req, res) => {
    const id = parseInt(req.params.id);
    // console.log(id)

    if (id === 0) {
        res.send(news);
    }
    else {
        const categoryNews = news.filter(n => parseInt(n.category_id) === id);
        res.send(categoryNews)
    }

})

app.listen(port, () => {
    console.log(`Dragon API is Running on port: ${port}`)
})