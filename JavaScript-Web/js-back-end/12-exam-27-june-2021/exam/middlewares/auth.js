const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NAME } = require('../config');
const userService = require('../services/user');

module.exports = () => (req, res, next) => {
    if (parseToken(req, res)) {
        req.auth = {
            async register(email, password, gender) {
                const token = await register(email, password, gender);
                res.cookie(COOKIE_NAME, token);
            },
            async login(email, password) {
                const token = await login(email, password);
                res.cookie(COOKIE_NAME, token);
            },
            logout() {
                res.clearCookie(COOKIE_NAME);
            }
        };

        next();
    }
};

async function register(email, password, gender) {
    const existing = await userService.getUserByEmail(email);

    if (existing) {
        throw new Error(`Email ${email} is already taken!`);
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(email, hashedPassword, gender);

    return generateToken(user);
}

async function login(email, password) {
    const user = await userService.getUserByEmail(email);

    if (!user) {
        throw new Error('No such user');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!hasMatch) {
        throw new Error('Incorrect password');
    }

    return generateToken(user);
}

function generateToken(userData) {
    return jwt.sign({
        _id: userData._id,
        email: userData.email,
        gender: userData.gender
    }, TOKEN_SECRET);
}

function parseToken(req, res) {
    const token = req.cookies[COOKIE_NAME];
    
    if (token) {
        try {
            const userData = jwt.verify(token, TOKEN_SECRET);
            req.user = userData;
            res.locals.user = userData; //viewable in the template
        } catch (err) {
            res.clearCookie(COOKIE_NAME);
            res.redirect('/auth/login');
            
            return false;
        }
    }

    return true;
}