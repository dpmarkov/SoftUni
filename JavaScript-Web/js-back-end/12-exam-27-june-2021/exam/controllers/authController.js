const { isGuest } = require('../middlewares/guards');

const router = require('express').Router();

router.get('/register', isGuest (), (req, res) => {
    res.render('register');
});
router.post('/register', isGuest (), async (req, res) => {
    const errors = [];
    const userData = {
        email: req.body.email,
        genderMale: req.body.gender == 'male',
        genderFemale: req.body.gender == 'female'
    };
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

    if (!emailPattern.test(req.body.email)) {
        errors.push('Email address is invalid!');
    }
    if (req.body.password.trim().length == 0) {
        errors.push('Password is required!');
    }
    if (req.body.password != req.body.rePass) {
        errors.push('Passwords don\'t match!');
    }
    if (!req.body.gender) {
        errors.push('Please select a gender!');
    }
    if (errors.length > 0) {
        return res.render('register', { errors, userData });
    }

    try {
        await req.auth.register(req.body.email, req.body.password, req.body.gender);
        res.redirect('/'); //TODO => change redirect location
    } catch (err) {
        res.render('user/register', { errors: [err.message], userData });
    }
});
router.get('/login', isGuest (), (req, res) => {
    res.render('login');
});
router.post('/login', isGuest (), async (req, res) => {
    const userData = {
        email: req.body.email
    };
    
    try {
        await req.auth.login(req.body.email, req.body.password);
        res.redirect('/'); //TODO => change redirect location
    } catch (err) {
        res.render('login', { errors: ['Invalid email or password'], userData });
    }
});

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;