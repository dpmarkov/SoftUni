const mongoose = require('mongoose');

start();

async function start() {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Database connected.');

    const catSchema = new mongoose.Schema({
        name: { type: String, required: true },
        color: {
            type: String,
            required: true,
            enum: ['Orange', 'White', 'Gray', 'Black', 'Mixed']
        }
    });

    catSchema.methods.sayMeow = function() {
        console.log(`${this.name} says meow.`);
    };

    const Cat = mongoose.model('Cat', catSchema);

    const myCat = new Cat({
        name: 'Fluffy',
        color: 'Beige'
    });

    try {
        await myCat.save();
    } catch (err) {
        console.error('Error occured:', err.message);
    }

    const foundCat = await Cat.find({name: 'Tom'});
    console.log(foundCat);
    
    foundCat[0].sayMeow();
    
    //const data = await Cat.find({});
    //console.log(data);
}