const { isGuest } = require('../middlewares/guards');

const router = require('express').Router();

router.get('/register', isGuest (), (req, res) => {
    res.render('user/register');
});
router.post('/register', isGuest (), async (req, res) => {
    const errors = [];
    const userData = {
        username: req.body.username,
        email: req.body.email
    };
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    const passwordPattern = /^[a-zA-Z0-9]+$/;

    if (!emailPattern.test(req.body.email)) {
        errors.push('Email address is invalid!');
    }
    if (req.body.username.trim().length < 3) {
        errors.push('Username should be at least 3 characters long!');
    }
    if (req.body.password.trim().length < 5) {
        errors.push('Password should be at least 5 characters long!');
    }
    if (!passwordPattern.test(req.body.password.trim())) {
        errors.push('Password can contain latin letters and numbers only!');
    }
    if (req.body.password != req.body.rePass) {
        errors.push('Passwords don\'t match!');
    }
    if (errors.length > 0) {
        return res.render('user/register', { errors, userData });
    }

    try {
        await req.auth.register(req.body.username, req.body.email, req.body.password);
        res.redirect('/'); //TODO => change redirect location
    } catch (err) {
        res.render('user/register', { errors: [err.message], userData });
    }
});
router.get('/login', isGuest (), (req, res) => {
    res.render('user/login');
});
router.post('/login', isGuest (), async (req, res) => {
    const userData = {
        username: req.body.username
    };
    
    try {
        await req.auth.login(req.body.username, req.body.password);
        res.redirect('/'); //TODO => change redirect location
    } catch (err) {
        return res.render('user/login', { errors: ['Invalid username or password'], userData });
    }
});

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;