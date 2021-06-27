const { Schema, model } = require('mongoose');

const schema = new Schema({
    startPoint: { type: String, required: [true, 'Start point cannot be empty']},
    endPoint: { type: String, required: [true, 'End point cannot be empty']},
    date: { type: Date, required: [true, 'Date cannot be empty']},
    time: { type: String, required: [true, 'Time cannot be empty']},
    carImage: { type: String, required: [true, 'Car image is missing']},
    carBrand: { type: String, required: [true, 'Car brand is missing']},
    seats: { type: Number, required: [true, 'Seats cannot be empty']},
    price: { type: Number, required: [true, 'Price is missing']},
    description: { type: String, required: [true, 'Description cannot be empty']},
    creator: { type: Schema.Types.ObjectId, ref: 'User' },
    buddies: [{ type: Schema.Types.ObjectId, ref: 'User', default: []}]
});

module.exports = model('Trip', schema);