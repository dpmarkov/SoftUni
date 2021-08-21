const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String },
    type: { type: String },
    year: { type: Number },
    city: { type: String },
    homeImage: { type: String },
    description: { type: String },
    availablePieces: { type: Number },
    rentedUsers: [{ type: Schema.Types.ObjectId, ref: 'User', default: [] }],
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = model('Housing', schema);