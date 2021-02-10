function solve(obj) {
    //properties validation
    if (!obj.hasOwnProperty('method')){
        throw new Error ('Invalid request header: Invalid Method');
    }

    if (!obj.hasOwnProperty('uri')){
        throw new Error ('Invalid request header: Invalid URI');
    }

    if (!obj.hasOwnProperty('version')){
        throw new Error ('Invalid request header: Invalid Version');
    }

    if (!obj.hasOwnProperty('message')){
        throw new Error ('Invalid request header: Invalid Message');
    }

    //method validation
    if (obj.method != 'GET' && obj.method != 'POST' && obj.method != 'DELETE' && obj.method != 'CONNECT'){
        throw new Error ('Invalid request header: Invalid Method');
    }

    //uri validation
    const uriPattern = /^[0-9a-z\.]+$/g;    
    if (obj.uri == '' || obj.uri.match(uriPattern) == null && obj.uri != '*'){
        throw new Error ('Invalid request header: Invalid URI');
    }

    //version validation
    if (obj.version != 'HTTP/0.9' && obj.version != 'HTTP/1.0' && obj.version != 'HTTP/1.1' && obj.version != 'HTTP/2.0'){
        throw new Error ('Invalid request header: Invalid Version');  
    }

    //message validation
    const messagePattern = /^[^<>\\&'"]+$/g;
    if (obj.message.match(messagePattern) == null && obj.message != ''){
        throw new Error ('Invalid request header: Invalid Message');
    }

    return obj;
}

solve(
    {
        method: 'GET',
        uri: '...aaa555',
        version: 'HTTP/1.1',
        message: ''
    }
);

// solve(
//     {
//         method: 'GET',
//         uri: 'svn.public.catalog',
//         version: 'HTTP/1.1',
//         message: ''
//     }
// );

// solve(
//     {
//         method: 'OPTIONS',
//         uri: 'git.master',
//         version: 'HTTP/1.1',
//         message: '-recursive'
//     }
// );

// solve(
//     {
//         method: 'POST',
//         uri: 'home.bash',
//         message: 'rm -rf /*'
//     }
// );