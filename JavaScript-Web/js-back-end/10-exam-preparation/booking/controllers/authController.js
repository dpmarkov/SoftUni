const router = require('express').Router();

router.get('/register', (req, res) => {
    res.render('register');
});
router.post('/register', async (req, res) => {
    const errors = [];
    const userData = {
        username: req.body.username
    };

    if (req.body.username.trim().length < 3) {
        errors.push('Username should be at least 3 characters long!');
    }
    if (req.body.password.trim().length < 5) {
        errors.push('Password should be at least 5 characters long!');
    }
    if (req.body.password != req.body.rePass) {
        errors.push('Passwords don\'t match!');
    }
    if (errors.length > 0) {
        return res.render('register', { errors, userData });
    }

    try {
        await req.auth.register(req.body.username, req.body.password);
    } catch (err) {
        res.render('register', { errors: err, userData });
    }

    res.redirect('/'); //TODO => change redirect location
});
router.get('/login', (req, res) => {
    res.render('login');
});
router.post('/login', async (req, res) => {
    const userData = {
        username: req.body.username
    };
    
    try {
        await req.auth.login(req.body.username, req.body.password);
    } catch (err) {
        return res.render('login', { errors: ['Invalid username or password'], userData });
    }

    res.redirect('/'); //TODO => change redirect location
});

module.exports = router;