const express = require('express');
const app = express();

app.set('view engine', 'ejs');

/*********   
MIDDLEWARE
**********/

const bodyParser = require("body-parser");

// permite afisarea asset-urilor din directorul "/public"
app.use('/static', express.static('public'));

/*********   
 RUTE
**********/

app.get('/', (req, res) => {
   res.render('pages/index', {preference: "girl"})
});

app.get('/Hello', (req, res) => {
  res.render('pages/hello')
});

app.post('/Hello', (req, res) => {
  res.render('pages/hello');
});

app.get('/New-page', (req, res) => {
  res.render('pages/new-page');
});

app.listen(5000, () => console.log(`Listening on port: 5000`))
