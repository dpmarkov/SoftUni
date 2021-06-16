const { check, validationResult } = require('express-validator');
const { isGuest, isAuth } = require('../middlewares/guards');

const router = require('express').Router();

router.get('/register', isGuest(), (req, res) => {
    res.render('register', { title: 'Register' });
});

router.post('/register', isGuest(),
    check('email', 'Please enter a valid email!').trim().isEmail().normalizeEmail(),
    check('password', 'All fields are required').trim().notEmpty(),
    check('repeatPassword', 'All fields are required').trim().notEmpty(),
    check('username', 'Username length should be at least 3 characters long!').trim().isLength({ min: 3}),
    async (req, res) => {
    try {
        const { errors } = validationResult(req);
        if (errors.length > 0) {
            throw new Error(errors.map(e => e.msg).join('\n'));
        }
        // const validEmail = validator.isEmail(req.body.email);
        // if (!validEmail) {
        // }
        await req.auth.register(req.body);
        res.redirect('/products');
    } catch (err) {
        const ctx = {
            title: 'Register',
            errors: err.message.split('\n'),
            data: { username: req.body.username, email: req.body.email }
        };
        res.render('register', ctx);
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login', { title: 'Login' });
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body);
        res.redirect('/products');
    } catch (err) {
        const ctx = {
            title: 'Login',
            error: err.message,
            data: { username: req.body.username }
        };
        res.render('login', ctx);
    }
});

router.get('/logout', isAuth(), (req, res) => {
    req.auth.logout();
    res.redirect('/products');
});

module.exports = router;