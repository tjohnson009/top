const form = document.querySelector('#js-validate');
const submit = document.querySelector('.submit');
submit.addEventListener('click', (e) => {
    if (nameError() &&
    emailError() &&
    countryError() &&
    zipcodeError()&&
    passwordAndConfirmError()) {
        form.submit(); 
    }
    e.preventDefault(); 

}); 

// name validation
function nameError() {
    const errorSpan = document.querySelector('#name-error'); 
    if (nameField.validity.valueMissing || nameField.value.trim() === '') { 
        errorSpan.innerHTML = 'What is your name maamsir?'; 
        nameField.classList.add('invalid'); 
        } else if (!nameRegex.test(nameField.value)) {
            errorSpan.innerHTML = 'Name must only contain letters.'; 
            // errorSpan.setCustomValidity('Name must only contain letters.'); 
            nameField.classList.add('invalid'); 
            } else if (nameField.validity.patternMismatch) {
                errorSpan.innerHTML = 'We are expecting a name here...'; 
                // errorSpan.setCustomValidity(''); 
                nameField.classList.add('invalid'); 
                return false; 
    } else {
        errorSpan.innerHTML = ''; 
        nameField.classList.remove('invalid'); 
    }
}
const nameRegex = /^[a-z ,.'-]+$/i;
const nameField = document.querySelector('#name'); 
nameField.addEventListener('focusout', (e) => {
    nameError(); 
})

// email validation
function emailError() {

}

const emailRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const emailField = document.querySelector('#email'); 
emailField.addEventListener('focusout', (e) => {
    const errorSpan = document.querySelector('#email-error');
    if (emailField.validity.typeMismatch || emailField.validity.valueMissing) {
        emailField.setCustomValidity('Please enter a valid email address my friend...'); 
        errorSpan.innerHTML = 'Please enter a valid email address my friend...'; 
        emailField.classList.add('invalid'); 
        } else {
            errorSpan.innerHTML = ''; 
            emailField.setCustomValidity(''); 
            emailField.classList.remove('invalid'); 
            
    }
})

// country validation
function countryError() {
    const errorSpan = document.querySelector('#country-error'); 
    if (countryField.validity.valueMissing) {
        countryField.setCustomValidity('You need to pick a country mane!'); 
        errorSpan.innerHTML = 'You need to pick a country mane!'; 
        countryField.classList.add('invalid'); 
        countryField.style.borderColor = 'red'; 
        return false; 
        } else {
            errorSpan.setCustomValidity(''); 
            errorSpan.innerHTML = ''; 
            countryField.classList.remove('invalid'); 
            countryField.style.borderColor = 'lightgreen'; 
    }
}
const countryField = document.querySelector('#country'); 
countryField.addEventListener('focusout', (e) => {
    countryError(); 
})

// zipcode validation
function zipcodeError() {
    const errorSpan = document.querySelector('#zipcode-error');
    if (!zipRegex.test(zipField.value) || zipField.validity.valueMissing) {
        zipField.setCustomValidity('Please enter a valid zip code my friend...'); 
        errorSpan.innerHTML = 'Please enter a valid zip code my friend...'; 
        zipField.classList.add('invalid'); 
        return false; 
        } else {
            errorSpan.innerHTML = ''; 
            zipField.setCustomValidity(''); 
            zipField.classList.remove('invalid'); 
    }
}
const zipField = document.querySelector('#zipcode'); 
const zipRegex = /^(?:\d{5}(?:-\d{4})?|[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d|[A-Za-z]{1,2}\d[A-Za-z\d]? \d[A-Za-z]{2}|[A-Za-z]{1,2}\d{1,2} \d[A-Za-z]{2}|\d{5}|\d{4}|\d{3}-\d{2}|\d{2}-\d{3}|\d{6})$/;
zipField.addEventListener('focusout', (e) => {
    zipcodeError(); 
})

// password validation + password confirmation validation
const confirmation = document.querySelector('#password-confirmation'); 
const password = document.querySelector('#password'); 
const passwordSpan = document.querySelector('#password-error'); 
const confirmationSpan = document.querySelector('#confirmation-error'); 
function passwordAndConfirmError() {
    if (!password.validity.valid || !confirmation.validity.valid) {
        if (password !== confirmation) {
            passwordSpan.innerHTML = 'Passwords must match!'; 
        confirmationSpan.innerHTML = 'Passwords must match!'; 
    } 

if (password.validity.tooShort) {
    passwordSpan.innerHTML = 'Password too short joker...'; 
}
if (confirmation.validity.tooShort) {
    passwordSpan.innerHTML = 'Password too short joker...'; 
}
} else {
    passwordSpan.innerHTML = ''; 
    confirmationSpan.innerHTML = ''; 
}

}
[password, confirmation].forEach(el => {
    el.addEventListener('focusout', (e) => {
        passwordAndConfirmError(); 
    })
})


