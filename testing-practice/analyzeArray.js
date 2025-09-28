function findSmallest(array) {
   return array.reduce((acc, el) => {
        if (el <= acc) {
            acc = el; 
        }
        return acc;
    }, array[0]);
}

function analyzeArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('Input must be an array');
    }

    if (array.some((el) => typeof el !== 'number')) {
        throw new Error('All items of array must be numbers.'); 
    }

    return {
        average: array.length === 0 ? 0 : (array.reduce((acc, el) => acc + el, 0)) / array.length, 
        min: array.length === 0 ? 0 : findSmallest(array), 
        max: array.length === 0 ? 0 : Math.max(...array), 
        length: array.length
    }; 
}

module.exports = analyzeArray; 