const express = require('express');
const handlebars = require('express-handlebars');

const storage = require('./util/storage');
const home = require('./controllers/home');
const catalog = require('./controllers/catalog');

async function start() {
    const app = express();
    const port = 3000;

    app.use('/static', express.static('static'));
    app.engine('.hbs', handlebars({
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');

    app.use(await storage());

    app.get('/', home);

    app.use('/catalog', catalog);

    app.listen(port, () => console.log('Server is listening on port', port));
}

start();