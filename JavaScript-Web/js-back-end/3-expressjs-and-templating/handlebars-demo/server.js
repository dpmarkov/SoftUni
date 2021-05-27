const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

app.engine('.hbs', handlebars({
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    const data = {
        name: 'Peter',
        age: 25
    };

    res.render('home', data);
});

app.listen(3000);