const User = require('../models/User');

async function createUser(username, name, hashedPassword) {
    const user = new User({
        username,
        name,
        hashedPassword
    });

    await user.save();
    return user;
}

async function getUser(username) {
    const pattern = new RegExp(`^${username}$`, 'i');
    const user = await User.findOne({ username: { $regex: pattern } });
    return user;
}

module.exports = {
    createUser,
    getUser
};