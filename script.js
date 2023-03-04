const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email');
    const zipcode = document.getElementById('zipcode');
    const country = document.getElementById('country');
    const password = document.getElementById('password');
    const passwordConfirmation = document.getElementById('password-confirmation');

    console.log(email.value)
})