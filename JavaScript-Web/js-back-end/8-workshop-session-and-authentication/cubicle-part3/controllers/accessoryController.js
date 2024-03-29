const { Router } = require('express');

const router = Router();

router.get('/create', (req, res ) => {
    res.render('createAccessory', { title: 'Create New Accessory' });
});

router.post('/create', async (req, res) => {
    const accessory = {
        name: req.body.name,
        description: req.body.description,
        imageUrl: req.body.imageUrl
    };

    await req.storage.createAccessory(accessory);

    res.redirect('/products');
});

module.exports = router;