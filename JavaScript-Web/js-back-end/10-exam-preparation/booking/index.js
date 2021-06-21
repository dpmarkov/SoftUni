const express = require('express');
const { PORT } = require ('./config');
const databaseConfig = require ('./config/database'); 
const expressConfig = require ('./config/express'); 

const authMiddleware = require('./middlewares/auth');

startApp();

async function startApp() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    
    app.listen(PORT, () => {
        console.log(`Application running at http://localhost:${PORT}`);
        testAuth();
    });    
}

async function testAuth() {
    const reqMock = {};
    const resMock = {
        cookie() {
            console.log('Set cookie', arguments);
        }
    };
    const nextMock = () => {};

    try {
        const auth = authMiddleware();
        auth(reqMock, resMock, nextMock);
        await reqMock.auth.login('peter', '123asd');
    } catch (err) {
        console.log('Error:', err.message);
    }
}