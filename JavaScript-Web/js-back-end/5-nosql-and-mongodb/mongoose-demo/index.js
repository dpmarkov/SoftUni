const mongoose = require('mongoose');

start();

async function start() {
    await mongoose.connect('mongodb://localhost:27017', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Database connected.');
}