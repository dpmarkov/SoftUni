const { about } = require('../controllers/about');
const { attach, attachPost } = require('../controllers/details');
const { post: commentPost } = require('../controllers/comments');

const productController = require('../controllers/productController');
const accessoryController = require('../controllers/accessoryController');

const { notFound } = require('../controllers/notFound');


module.exports = (app) => {
    app.get('/', (req, res) => res.redirect('/products'));
    app.get('/about', about);

    app.use('/products', productController);
    app.use('/accessory', accessoryController);

    app.post('/comments/:cubeId/create', commentPost);

    app.get('/details/:id/attach', attach);
    app.post('/details/:cubeId/attach', attachPost);

    app.all('*', notFound);
};