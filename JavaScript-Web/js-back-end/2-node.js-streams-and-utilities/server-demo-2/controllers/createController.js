const parseForm = require('../util/formParser');
const database = require('../util/database');

module.exports = async (req, res) => {
    const body = await parseForm(req);

    console.log('item is created');

    database.addItem(body);
    
    res.WriteHead(301, {
        'Location': '/catalog'
    });
    res.end();
};