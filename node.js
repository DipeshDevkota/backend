require('dotenv').config()






var express = require('express');
var app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/twitter', (req, res) => {
    res.send('dipesh');
});

app.get('/login', (req, res) => {
    res.send('<h1>Please login</h1>');
});

app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
