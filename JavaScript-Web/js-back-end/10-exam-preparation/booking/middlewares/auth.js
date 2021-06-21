const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NAME } = require('../config');
const userService = require('../services/user');

function init () {
    return (req, res ,next) => {
        req.auth = {
            register (username, password) {

            },
            login (username, password) {
                
            },
            logout () {

            }
        };
    };
}

async function register(username, password) {
    //TODO => adapt parameters to project requirements

    const existing = await userService.getUserByUsername(username);

    if (existing) {
        throw new Error(`Username ${username} is already taken!`);
    }

    const hashedPassword = await jwt.hash(password, 10);
    const user = userService.createUser(username, hashedPassword);
    
    return generateToken(user);
}

async function login (username, password) {
    const user = await userService.getUserByUsername(username);

    if (!user) {
        throw new Error('No such user');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!hasMatch) {
        throw new Error('Incorrect password');
    }

    return generateToken(user);
}

function generateToken (userData) {
    return jwt.sign({
        _id: userData._id,
        username: userData.username
    }, TOKEN_SECRET);
}