function parseError(err) {
    if (err.name == 'ValidationError') { //parsing mongoose errors
        return Object.values(err.errors).map(e => e.properties.message);
    } else { //custom errors from the service 
        return [err.message];
    }
}

module.exports = { parseError };