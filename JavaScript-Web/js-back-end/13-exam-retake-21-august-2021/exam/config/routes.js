const homeController = require('../controllers/homeController');
const authController = require('../controllers/authController');
const housingController = require('../controllers/housingController');

module.exports = (app) => {
    app.use('/', homeController);
    app.use('/auth', authController);
    app.use('/housing', housingController);
    app.get('*', (req, res) => {
        res.render('notFound');
    });
};