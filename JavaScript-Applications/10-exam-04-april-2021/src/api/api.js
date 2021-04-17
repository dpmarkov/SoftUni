export const settings = {
    host: ''
};

async function request(url, options) {
    try {
        const response = await fetch(settings.host + url, options);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error (error.message);
        }

        try {
            const data = await response.json();
            return data;
        } catch {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

function getOptions(method = 'GET', body) {
    const options = {
        method,
        headers: {}
    };

    const token = sessionStorage.getItem('authToken');
    if (token != null) {
        options.headers['X-Authorization'] = token;
    }

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    return options;
}

export async function get(url) {
    return await request(url, getOptions());
}

export async function post(url, data) {
    return await request(url, getOptions('POST', data));
}

export async function put(url, data) {
    return await request(url, getOptions('PUT', data));
}

export async function del(url) {
    return await request(url, getOptions('DELETE'));
}

export async function login(email, password) {
    const result = await post('/users/login', { email, password});

    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password});
    
    sessionStorage.setItem('authToken', result.accessToken);
    sessionStorage.setItem('email', result.email);
    sessionStorage.setItem('userId', result._id);

    return result;
}

export async function logout() {
    await get('/users/logout');
    
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('userId');
}