const express = require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');

const authMiddleware = require('../middlewares/auth');
const storageMiddleware = require('../middlewares/storage');

module.exports = (app) => {
    app.engine('hbs', hbs({
        extname: 'hbs'
    }));
    app.set('view engine', 'hbs');

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(authMiddleware());
    app.use(storageMiddleware());

    app.use((req, res, next) => { //logger
        if (req.url.includes('favicon') == false) { //skip favicon
            console.log('>>>', req.method, req.url);

            if (req.user) {
                console.log('Known user', req.user.username);
            }
        }

        next();
    });
};