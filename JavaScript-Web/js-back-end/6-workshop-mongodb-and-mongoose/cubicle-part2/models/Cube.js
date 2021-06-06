const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: String,
    description: String,
    imageUrl: String,
    difficulty: String
});

module.exports = model('Cube', schema);