const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('.hbs', handlebars({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.render('home.hbs');
});

app.listen(3000);