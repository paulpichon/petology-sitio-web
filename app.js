const express = require('express');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// hbs
app.set('view engine', 'hbs');
//archivo publico
//por defecto toma el index que haya en la carpeta
app.use( express.static('public') );

//index
app.get('/', (req, res) => {
    res.render('index');
});
//buy
app.get('/', (req, res) => {
    res.render('buy');
});
//clinic
app.get('/', (req, res) => {
    res.render('clinic');
});
//contact
app.get('/', (req, res) => {
    res.render('contact');
});
//pet
app.get('/', (req, res) => {
    res.render('pet');
});
//service
app.get('/', (req, res) => {
    res.render('service');
});
//404
app.get('*', (req, res) => {
    res.render('404');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});