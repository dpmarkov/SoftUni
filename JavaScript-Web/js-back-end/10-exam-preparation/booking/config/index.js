//TODO =>  update database name (exam-db) to match project requirements

module.exports = {
    PORT: 3000,
    DB_CONNECTION_STRING: 'mongodb://localhost:27017/booking',
    TOKEN_SECRET: 'my secret string 123',
    COOKIE_NAME: 'SESSION_TOKEN'
};