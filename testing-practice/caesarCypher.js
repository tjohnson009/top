function caesar(string, shiftAmount) {
    const lowercases = 'abcdefghijklmnopqrstuvwxyz'; 
    const capitals = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 

    let cyphered = string.split('').map((el, index, array) => {
        if (lowercases.indexOf(el) !== -1) {
            return lowercases[((lowercases.indexOf(el) + shiftAmount + lowercases.length) % lowercases.length)]; 
        } else if (capitals.indexOf(el) !== -1) {
            return capitals[((capitals.indexOf(el)) + shiftAmount + capitals.length) % capitals.length];
        }
        return el; 
    }).join(''); 
    return cyphered; 
}

module.exports = caesar; 