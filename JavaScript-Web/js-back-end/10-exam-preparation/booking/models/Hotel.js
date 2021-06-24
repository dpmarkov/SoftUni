const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: { type: String, required: [true, 'Hotel name is required'], minLength: [4, 'Hotel name must at least 4 characters long'] },
    city: { type: String, required: [true, 'City is required'], minLength: [3, 'City must at least 3 characters long'] },
    imageUrl: { type: String, required: [true, 'Image is required'], match: [/^https?/, 'Image must be a valid URL'] },
    rooms: { type: Number, required: [true, 'Free Rooms are required'], min: [1, 'Rooms should be at least 1'], max: [100, 'Rooms can not be more than 100'] },
    bookedBy: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: Schema.Types.ObjectId, ref: 'User', required: true }
});

module.exports = model('Hotel', schema);