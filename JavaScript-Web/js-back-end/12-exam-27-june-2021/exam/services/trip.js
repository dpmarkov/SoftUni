const Trip = require('../models/Trip');

async function createTrip(tripData) {
    const trip = new Trip(tripData);

    await trip.save();

    return trip;
}

async function getAllTrips() {
    return Trip.find({}).lean();
}

async function getTripById(id) {
    return Trip.findById(id).populate('buddies').populate('creator').lean();
}

async function deleteTrip(id) {
    return Trip.findByIdAndDelete(id);
}

async function joinTrip(tripId, userId) {
    const trip = await Trip.findById(tripId);

    trip.buddies.push(userId);

    return trip.save();
}

async function editTrip(id, tripData) {
    const trip = await Trip.findById(id);

    trip.startPoint = tripData.startPoint;
    trip.endPoint = tripData.endPoint;
    trip.price = tripData.price;
    trip.date = tripData.date;
    trip.time = tripData.time;
    trip.carImage = tripData.carImage;
    trip.carBrand = tripData.carBrand;
    trip.seats = tripData.seats;
    trip.description = tripData.description;

    return trip.save();
}

module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    joinTrip,
    deleteTrip,
    editTrip
};