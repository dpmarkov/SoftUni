const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.setHeader('Set-Cookie', 'sessionId: asdsasd');

    res.send('Hello');    
});

app.listen(3000);