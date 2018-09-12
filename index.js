const express = require('express');
const app = express();

app.set('view engine');

app.get('/', (req, res) =>
{
    res.send('Hello world');
});

app.get('/hello', (req, res) =>
{
    res.render('hello', {name: "Alex", age: 20});
});

