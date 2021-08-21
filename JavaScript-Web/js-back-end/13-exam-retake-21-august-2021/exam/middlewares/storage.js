const housingService = require('../services/housing');

module.exports = () => (req, res, next) => {
    req.storage = { ...housingService };
    next();
};