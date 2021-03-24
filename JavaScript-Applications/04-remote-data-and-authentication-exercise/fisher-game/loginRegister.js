document.getElementById('loginForm').addEventListener('submit', loginUser);
document.getElementById('registerForm').addEventListener('submit', registerUser);

async function loginUser(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const response = await fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password')
        })
    });

    if (response.ok != true){
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    sessionStorage.setItem('userToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('userId', data._id);
    window.location.pathname = 'index.html';
}

async function registerUser(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    if (formData.get('email') == '' || formData.get('password') == ''){
        return alert('All fields are required!');
    } else if (formData.get('password') != formData.get('rePass')) {
        return alert('Passwords don\'t match!');
    }

    const response = await fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: formData.get('email'),
            password: formData.get('password')
        })
    });

    if (response.ok != true){
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();
    sessionStorage.setItem('userToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('userId', data._id);
    window.location.pathname = 'index.html';
}