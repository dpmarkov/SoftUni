const database = require('../util/database');
const { layout, loadTemplate } = require('../util/template');

module.exports = async (req, res) => {
    const catalogPage = await render('catalog', {
        
    });
    res.write(await layout(catalogPage, 'Catalog'));
    res.end();
}