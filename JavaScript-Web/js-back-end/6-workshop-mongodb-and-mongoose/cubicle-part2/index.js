const express = require('express');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

const { init: storage } = require('./models/storage');

start();

async function start() {
    const port = 3000;
    const app = express();

    expressConfig(app);
    routesConfig(app);

    app.use(await storage());

    app.listen(port, () => console.log(`Server listening on port ${port}`));
}