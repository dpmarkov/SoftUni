function validate() {
    const emailField = document.getElementById('email');

    emailField.addEventListener('change', ()=>{
        const pattern = /^[a-z0-9]+@[a-z]+\.[a-z]+$/g;

        if (!pattern.test(emailField.value)){
            emailField.classList.add('error');
        } else {
            emailField.classList.remove('error');
        }
    });
}