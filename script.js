const form = document.querySelector('form');
const email = document.getElementById('email');
const zipcode = document.getElementById('zipcode');
const country = document.getElementById('country');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('password-confirmation');
const inputs = document.querySelectorAll('input')

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

email.addEventListener('input', () => {
    if (email.validity.patternMismatch) {
        email.setCustomValidity("Email needs to be in email@website.com format")
    } else {
        email.setCustomValidity("")
    }
});

zipcode.addEventListener('input', () => {
    if (zipcode.validity.patternMismatch) {
        zipcode.setCustomValidity("Zipcode can only use numbers 0-9")
    } else if (zipcode.validity.tooShort || zipcode.validity.tooLong) {
        zipcode.setCustomValidity("Zipcode must be exactly 5 numbers")
    } else {
        zipcode.setCustomValidity("");
    }
});

country.addEventListener('input', () => {
    if (country.validity.patternMismatch) {
        country.setCustomValidity("Country can only use letters A-Z")
    } else if (country.validity.tooShort || country.validity.tooLong) {
        country.setCustomValidity("Country code must be 3 letters long")
    } else {
        country.setCustomValidity("")
    }
})

password.addEventListener("input", () => {
    // if (password.validity.patternMismatch) {
    //     password.setCustomValidity("Password must contain both uppercase and lowercase letters and 1 symbol")
    // }
    console.log(password.validity)
})

inputs.forEach(input => {
    input.addEventListener("focusout", () => {
        input.reportValidity()
    })
})