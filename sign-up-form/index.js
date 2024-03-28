console.log('test'); 
// if password match
// remove invalid 
// remove paragraph

let password1 = document.querySelector('#password'); 
let password2 = document.querySelector('#confirm');
let matches = document.querySelector('.match'); 

// form[3].value
[password1, password2].forEach(el => {
    el.addEventListener('change', e => {
        if (!password2.value && !password1.value) {
            matches.hidden = true;
        } else if ((password1.value === password2.value) && password1.validity.valid && password2.validity.valid) {
            matches.hidden = true; 
        } else if ((!password1.validity.valid || !password2.validity.valid) || (password1.value !== password2.value)) {
            matches.hidden = false; 
        } else if ((password1.value && password2.value) && (!password1.validity.valid || !password2.validity.valid)) {
            matches.hidden = false; 
            // matches.hidden = false; 
        }
    })
})
    