const Play = require('../models/Play');

async function getAllPlays() {
    return Play.find({ public: true }).sort({ createdAt: -1 }).lean();
}

async function getPlayById(id) {
    return Play.findById(id).populate('usersLiked').lean();
}

async function createPlay(playData) {
    const pattern = new RegExp(`^${playData.title}$`, 'i');
    const existing = await Play.find({ title: { $regex: pattern } }).lean();

    if (existing.length != 0) {
        const err = new Error(`Title "${playData.title}" is taken!`);
        err.type = 'custom';
        throw err;
    }

    const play = new Play(playData);

    await play.save();

    return play;
}

async function editPlay(id, playData) {

}

async function deletePlay(id) {
    return Play.findByIdAndDelete(id);
}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay
};