const Housing = require('../models/Housing');

async function getAllHousings() {
    return Housing.find({}).lean();
}

async function getRecentHousings() {
    return Housing.find({}).limit(3).lean();
}

async function getHousingById(id) {
    return Housing.findById(id).populate('rentedUsers').populate('creator').lean();
}

async function deleteHousing(id) {
    return Housing.findByIdAndDelete(id);
}

async function editHousing(id, data) {
    const housing = await Housing.findById(id);

    housing.name = data.name;
    housing.type = data.type;
    housing.year = data.year;
    housing.city = data.city;
    housing.homeimage = data.homeimage;
    housing.description = data.description;
    housing.availablePieces = data.availablePieces;

    return housing.save();
}

async function createHousing(housingData) {
    const housing = new Housing(housingData);

    await housing.save();
    return housing;
}

async function rentHousing(housingId, userId) {
    const housing = await Housing.findById(housingId);

    housing.rentedUsers.push(userId);
    housing.availablePieces = housing.availablePieces - 1;

    return housing.save();
}

async function searchHousings(query) {
    return Housing.find({
        'type': { $regex: new RegExp('^' + query.toLowerCase(), 'i') }
    }).lean();
}

module.exports = {
    getAllHousings,
    getRecentHousings,
    createHousing,
    getHousingById,
    editHousing,
    deleteHousing,
    rentHousing,
    searchHousings
};