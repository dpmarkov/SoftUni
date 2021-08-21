const router = require('express').Router();
const { parseError } = require('../util/errorParser');
const { isUser } = require('../middlewares/guards');

router.get('/all', async (req, res) => {
    const housings = await req.storage.getAllHousings();
    res.render('housing/all', { housings });
});

router.get('/create', isUser(), (req, res) => {
    res.render('housing/create');
});

router.post('/create', isUser(), async (req, res) => {
    const housingData = {
        name: req.body.name.trim(),
        type: req.body.type.trim().toLowerCase(),
        year: Number(req.body.year),
        city: req.body.city.trim(),
        homeImage: req.body.homeImage.trim(),
        description: req.body.description.trim(),
        availablePieces: req.body.availablePieces.trim(),
        rentedUsers: [],
        owner: req.user._id
    };

    const errors = housingDataChecker(housingData);
    if (errors) {
        return res.render('housing/create', { housing: housingData, errors });
    }

    try {
        await req.storage.createHousing(housingData);

        res.redirect('/housing/all');
    } catch (err) {
        const ctx = {
            errors: parseError(err),
            housingData
        };
        res.render('housing/create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const housing = await req.storage.getHousingById(req.params.id);

        housing.rentedUsersNames = housing.rentedUsers.map(e => e.name).join(', ');
        housing.hasUser = Boolean(req.user);
        housing.isOwner = req.user && req.user._id == housing.owner._id;
        housing.hasAvailablePieces = housing.availablePieces > 0 ? true : false;
        housing.isRented = req.user && (housing.rentedUsers.map(e => e._id.toString()).includes(req.user._id));

        res.render('housing/details', { housing });
    } catch (err) {
        console.error(err.message);
        res.redirect('/404');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const housing = await req.storage.getHousingById(req.params.id);

        if (housing.owner._id != req.user._id) {
            throw new Error('You can not edit a housing you have Not created!');
        }

        res.render('housing/edit', { housing });
    } catch (err) {
        console.error(err.message);
        res.redirect('/404');
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const housingData = {
        name: req.body.name.trim(),
        type: req.body.type.trim().toLowerCase(),
        year: Number(req.body.year),
        city: req.body.city.trim(),
        homeImage: req.body.homeImage.trim(),
        description: req.body.description.trim(),
        availablePieces: req.body.availablePieces.trim(),
        rentedUsers: [],
        owner: req.user._id,
        _id: req.params.id
    };

    try {
        const housing = await req.storage.getHousingById(req.params.id);

        if (housing.owner._id != req.user._id) {
            throw new Error('You can not edit a housing you have Not created!');
        }

        const errors = housingDataChecker(housingData);
        if (errors) {
            return res.render('housing/edit', { housing: housingData, errors });
        }

        await req.storage.editHousing(req.params.id, housingData);

        res.redirect('/housing/details/' + req.params.id);
    } catch (err) {
        const ctx = {
            errors: parseError(err),
            housing: housingData
        };

        res.render('housing/edit', ctx);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const housing = await req.storage.getHousingById(req.params.id);

        if (housing.owner._id != req.user._id) {
            throw new Error('You can not delete a housing you have Not created!');
        }

        await req.storage.deleteHousing(req.params.id);
        res.redirect('/housing/all');
    } catch (err) {
        console.log(err.message);
        res.redirect('/housing/details/' + req.params.id);
    }
});

router.get('/rent/:id', isUser(), async (req, res) => {
    const housing = await req.storage.getHousingById(req.params.id);
    
    try {
        if (housing.owner._id == req.user._id) {
            throw new Error('You can not rent your own housing!');
        }

        await req.storage.rentHousing(req.params.id, req.user._id);
        res.redirect('/housing/details/' + req.params.id);
    } catch (err) {
        housing._id = req.params.id;

        console.log(err.message);

        res.render('housing/details', { housing, errors: ['You cannot rent your own housing'] });
    }
});

router.get('/search', (req, res) => {
    res.render('housing/search');
});

router.post('/search', async (req, res) => {
    const housings = await req.storage.searchHousings(req.body.search);
    const isSeached = true;

    const ctx = {
        isSeached,
        housings
    };

    res.render('housing/search', ctx);
});

function housingDataChecker(data) {
    const errors = [];

    if (data.name.length < 6) {
        errors.push('The Name should be at least 6 characters!');
    }
    if (!['apartment', 'villa', 'house'].includes(data.type)) {
        errors.push('Type should be some of the followings: Apartment, Villa or House');
    }

    if (!(data.year > 1850 && data.year < 2021)) {
        errors.push('The Year should be between 1850 and 2021!');
    }
    if (data.city.length < 4) {
        errors.push('The City should be at least 4 characters long!');
    }
    if (!(data.homeImage.startsWith('http://') || data.homeImage.startsWith('https://'))) {
        errors.push('The Home Image should starts with http:// or https:// !');
    }
    if (data.description.length > 60) {
        errors.push('The Property Description should be a maximum of 60 characters long!');
    }
    if (!(data.availablePieces >= 0 && data.availablePieces <= 10)) {
        errors.push('The Available Pieces should be positive number (from 0 to 10)!');
    }

    if (errors.length == 0) {
        return false;
    }

    return errors;
}

module.exports = router;