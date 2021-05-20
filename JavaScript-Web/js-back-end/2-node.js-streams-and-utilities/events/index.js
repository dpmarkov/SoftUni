const events = require('events');
const publisher = new events.EventEmitter();

publisher.on('ping', firstHandler);
publisher.on('ping', secondHandler);
publisher.on('pong', thirdHandler);

function firstHandler (msg) {
    console.log('first', msg);
}
function secondHandler (msg) {
    console.log('second', msg);
}
function thirdHandler (msg) {
    console.log('third', msg);
}

publisher.emit('ping', 'trigger');
publisher.emit('pong', 'trigger');