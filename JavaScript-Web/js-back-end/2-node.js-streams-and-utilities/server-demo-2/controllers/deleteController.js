const database = require('../util/database');

module.exports = async (req, res) => {
    const id = req.url.split('=')[1];
    database.deleteItem(id);
    
    res.WriteHead(301, {
        'Location': '/catalog'
    });
    res.end();
};