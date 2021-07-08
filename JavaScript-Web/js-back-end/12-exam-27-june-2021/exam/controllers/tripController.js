const router = require('express').Router();
const { parseError } = require('../util/errorParser');
const { parseDate } = require('../util/dateParser');
const { isUser } = require('../middlewares/guards');

router.get('/create', isUser(), (req, res) => {
    res.render('trip/create');
});

router.post('/create', isUser(), async (req, res) => {
    const tripData = {
        startPoint: req.body.startPoint.trim(),
        endPoint: req.body.endPoint.trim(),
        date: parseDate(req.body.date),
        time: req.body.time,
        carImage: req.body.carImage.trim(),
        carBrand: req.body.carBrand.trim(),
        seats: req.body.seats.trim(),
        price: req.body.price.trim(),
        description: req.body.description.trim(),
        creator: req.user._id
    };

    const errors = tripDataChecker(tripData);
    if (errors) {  
        return res.render('trip/create', { trip: tripData, errors });
    }

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
    trips.forEach(e => e.date = parseDate(e.date));
    res.render('trip/shared', { trips });
});

router.get('/details/:id', async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);
        trip.date = parseDate(trip.date);

        const availableSeats = trip.seats - trip.buddies.length;

        trip.buddiesConcat = trip.buddies.map(e => e.email).join(', ');
        trip.hasUser = Boolean(req.user);
        trip.isCreator = req.user && req.user._id == trip.creator._id;
        trip.availableSeats = availableSeats;
        trip.hasUserAndSeats = req.user && availableSeats > 0 && (!trip.buddies.map(e => e._id.toString()).includes(req.user._id));
        trip.noSeats = req.user && availableSeats == 0;
        trip.isJoined = req.user && (trip.buddies.map(e => e._id.toString()).includes(req.user._id));

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

        if (trip.creator._id != req.user._id) {
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
        trip.date = parseDate(trip.date);

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

        const tripData = {
            startPoint: req.body.startPoint.trim(),
            endPoint: req.body.endPoint.trim(),
            date: parseDate(req.body.date),
            time: req.body.time,
            carImage: req.body.carImage.trim(),
            carBrand: req.body.carBrand.trim(),
            seats: req.body.seats.trim(),
            price: req.body.price.trim(),
            description: req.body.description.trim(),
            _id: req.params.id
        };
    
        const errors = tripDataChecker(tripData);
        if (errors) {  
            return res.render('trip/edit', { trip: tripData, errors });
        }
        
        await req.storage.editTrip(req.params.id, tripData);

        res.redirect('/trips/details/' + req.params.id);
    } catch (err) {
        const ctx = {
            errors: parseError(err),
            trip: {
                _id: req.params.id,
                startPoint: req.body.startPoint,
                endPoint: req.body.endPoint,
                date: parseDate(req.body.date),
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

function tripDataChecker (data) { //checks data for empty/invalid fields; useful for edit/create
    //expected data should already be trimmed
    const errors = [];
    const numbersPattern = /^[\d]+$/;
    const datePattern = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/; //YYYY-MM-DD
    const timePattern = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    if (data.startPoint.length == 0) {
        errors.push('Start point cannot be empty');
    }
    if (data.endPoint.length == 0) {
        errors.push('End point cannot be empty');
    }
    if (data.date.length == 0) {
        errors.push('Date cannot be empty');
    } else if (!datePattern.test(data.date)) {
        errors.push('Date is invalid!');
    }
    if (data.time.length == 0) {
        errors.push('Time cannot be empty');
    } else if (!timePattern.test(data.time)) {
        errors.push('Time is invalid!');
    }
    if (data.seats.length == 0) {
        errors.push('Seats cannot be empty');
    } else if (!numbersPattern.test(data.seats)) {
        errors.push('Seats must be a valid number!');
    }
    if (data.price.length == 0) {
        errors.push('Price cannot be empty');
    } else if (!numbersPattern.test(data.price)) {
        errors.push('Price must be a valid number!');
    }

    if (errors.length == 0) {
        return false;
    }

    return errors;
}

module.exports = router;