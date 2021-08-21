const patterns = {
    latinCharacters: /^[a-zA-Z']+$/,
    email: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    firstAndLastName: /^[a-zA-Z]+ [a-zA-Z]+$/
};

module.exports = patterns;