const User = require('../models/User');

async function createUser(email, hashedPassword, gender) {
    //TODO => adapt properties to project requirements

    const user = new User({
        email,
        hashedPassword,
        gender
    });

    await user.save();

    return user;
}

async function getUserByEmail(email) {
    const pattern = new RegExp(`^${email}$`, 'i');
    const user = await User.findOne({ email: { $regex: pattern } });
    return user;
}

//TODO => add function for finding user by other properties specified by project requirements

module.exports = {
    createUser,
    getUserByEmail
};