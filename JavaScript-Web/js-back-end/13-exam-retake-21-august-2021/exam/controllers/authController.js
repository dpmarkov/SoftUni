const { isGuest } = require('../middlewares/guards');
const patterns = require('../util/patterns');

const router = require('express').Router();

router.get('/register', isGuest (), (req, res) => {
    res.render('register');
});
router.post('/register', isGuest (), async (req, res) => {
    const errors = [];
    const userData = {
        name: req.body.name,
        username: req.body.username
    };

    if (!patterns.firstAndLastName.test(req.body.name)) {
        errors.push('Full name is not valid!');
    }
    if (req.body.username.trim().length < 5) {
        errors.push('Username should be at least 5 characters long!');
    }
    if (req.body.password.trim().length < 4) {
        errors.push('Password should be at least 4 characters long!');
    }
    if (req.body.password != req.body.rePass) {
        errors.push('Passwords don\'t match!');
    }

    if (errors.length > 0) {
        return res.render('register', { errors, userData });
    }

    try {
        await req.auth.register(req.body.username, req.body.name, req.body.password);
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
        username: req.body.username
    };
    
    try {
        await req.auth.login(req.body.username, req.body.password);
        res.redirect('/'); //TODO => change redirect location
    } catch (err) {
        res.render('login', { errors: ['Invalid username or password'], userData });
    }
});

router.get('/logout', (req, res) => {
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;