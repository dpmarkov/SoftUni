const router = require('express').Router();
const { parseError } = require('../util/errorParser');
const { isUser } = require('../middlewares/guards');

router.get('/create', isUser(), (req, res) => {
    res.render('trip/create');
});

router.post('/create', isUser(), async (req, res) => {
    const tripData = {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
        creator: req.user._id
    };

    try {
        await req.storage.createTrip(tripData);

        res.redirect('/trips/shared');
    } catch (err) {
        const ctx = {
            errors: parseError(err),
            tripData
        };
        res.render('trip/create', ctx);
    }
});

router.get('/shared', async (req, res) => {
    const trips = await req.storage.getAllTrips();
    trips.forEach(e => {
        const date = new Date(e.date);
        const year = date.getFullYear();
        const month = date.getMonth().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        e.date = `${year}-${month}-${day}`;
    });
    res.render('trip/shared', { trips });
});

router.get('/details/:id', async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);
        const date = new Date(trip.date);
        const year = date.getFullYear();
        const month = date.getMonth().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        trip.date = `${year}-${month}-${day}`;


        trip.buddiesConcat = trip.buddies.map(e => e.email).join(',');
        trip.hasUser = Boolean(req.user);
        trip.isCreator = req.user && req.user._id == trip.creator._id;
        trip.noSeats == req.user && trip.seats == 0;
        trip.availableSeats = req.user && trip.seats > 0 && (!trip.buddies.map(e => e._id.toString()).includes(req.user._id));
        trip.isJoined = req.user && trip.seats > 0 && (trip.buddies.map(e => e._id.toString()).includes(req.user._id));
        trip.seatsLeft = Number(trip.seats) - trip.buddies.length;

        console.log(trip.buddiesConcat);
        res.render('trip/details', { trip });
    } catch (err) {
        console.error(err.message);
        res.redirect('/404');
    }
});

router.get('/join/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);

        if (trip.creator._id == req.user._id) {
            throw new Error('You can not join your own trip!');
        }

        await req.storage.joinTrip(req.params.id, req.user._id);
        res.redirect('/trips/details/' + req.params.id);
    } catch (err) {
        const trip = await req.storage.getTripById(req.params.id);

        console.log(err.message);
        res.render('trip/details', { trip, errors: ['You cannot join your own trip'] });
        //res.redirect('/trips/details/' + req.params.id);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);

        if (trip.creator != req.user._id) {
            throw new Error('You can not delete a trip you have Not created!');
        }

        await req.storage.deleteTrip(req.params.id);
        res.redirect('/trips/shared');
    } catch (err) {
        console.log(err.message);
        res.redirect('/trips/details/' + req.params.id);
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);
        const date = new Date(trip.date);
        const year = date.getFullYear();
        const month = date.getMonth().toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');
        trip.date = `${year}-${month}-${day}`;

        if (trip.creator._id != req.user._id) {
            throw new Error('You can not edit a trip you have Not created!');
        }

        res.render('trip/edit', { trip });
    } catch (err) {
        console.error(err.message);
        res.redirect('/404');
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);

        if (trip.creator._id != req.user._id) {
            throw new Error('You can not edit a trip you have Not created!');
        }

        await req.storage.editTrip(req.params.id, req.body);

        res.redirect('/trips/details/' + req.params.id);
    } catch (err) {
        const ctx = {
            errors: parseError(err),
            trip: {
                startPoint: req.body.startPoint,
                endPoint: req.body.endPoint,
                date: req.body.date,
                time: req.body.time,
                carImage: req.body.carImage,
                carBrand: req.body.carBrand,
                seats: req.body.seats,
                price: req.body.price,
                description: req.body.description,
                creator: req.user._id
            }
        };
        res.render('trip/edit', ctx);
    }
});

module.exports = router;