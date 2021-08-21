const router = require('express').Router();

router.get('/', async (req, res) => {
    const housings = await req.storage.getRecentHousings();
    res.render('home', { housings });
});

module.exports = router;