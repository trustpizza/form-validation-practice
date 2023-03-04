const form = document.querySelector('form');
const email = document.getElementById('email');
const zipcode = document.getElementById('zipcode');
const country = document.getElementById('country');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(
        email.value,
        zipcode.value,
        country.value,
        password.value,
        passwordConfirmation.value
        )
})

email.addEventListener('input', (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Email is a required field stupid!")
    } else if (email.validity.patternMismatch) {
        email.setCustomValidity("Email needs to be in email@website.com format")
    } else {
        email.setCustomValidity("")
    }

    form.reportValidity()
}) 