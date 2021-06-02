const { MongoClient } = require('mongodb');
const connectionStr = 'mongodb://localhost:27017';
const client = new MongoClient(connectionStr, {
    useUnifiedTopology: true
});

client.connect((err) => {
    if (err != null) {
        return console.error('Something went wrong!', err);
    }

    console.log('Database connected!');

    const db = client.db('testdb');
    const cats = db.collection('cats');

    cats.insertOne({name: 'Tom', color: 'Gray'}, (err, result) => {
        cats.find({name: 'Tom'}).toArray((err, data) => {
            console.log(data);
        });
    });
});