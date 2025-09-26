function capitalize(string) {
    if (!/^[A-Za-z]+$/.test(string)) {
        throw new Error('Input must contain only letters'); 
    }
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();   
}

module.exports = capitalize;