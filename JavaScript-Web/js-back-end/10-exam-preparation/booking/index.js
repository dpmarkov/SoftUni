const express = require('express');
const { PORT } = require ('./config');
const databaseConfig = require ('./config/database'); 
const expressConfig = require ('./config/express'); 

startApp();

async function startApp() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    
    app.listen(PORT, () => console.log(`Application running at http://localhost:${PORT}`));    
}