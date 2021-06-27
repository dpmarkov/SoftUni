const Play = require('../models/Play');

async function getAllPlays(orderBy) {
    let sort = { createdAt: -1 };
    if (orderBy == 'likes') {
        sort = { usersLiked: 'desc' };
    }
    return Play.find({ public: true }).sort(sort).lean();
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
    const play = await Play.findById(id);

    play.title = playData.title;
    play.decription = playData.decription;
    play.imageUrl = playData.imageUrl;
    play.public = Boolean(playData.public);

    return play.save();
}

async function deletePlay(id) {
    return Play.findByIdAndDelete(id);
}

async function likePlay(playId, userId) {
    const play = await Play.findById(playId);

    play.usersLiked.push(userId);

    return play.save();
}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    editPlay,
    deletePlay,
    likePlay
};