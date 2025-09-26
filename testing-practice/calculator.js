class Calculator {
    constructor() {    
        this.value = 0;
    }

    validateArguments(a,b) {
            if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Invalid arguments - arguments must be numeric');
        }

        if (a == undefined || b == undefined) {
            throw new Error('Two arguments required');
        }
    }

    add(a,b) {
        this.validateArguments(a,b);
        return a + b; 
    }

    subtract(a,b) { 
        this.validateArguments(a,b);
        return a - b; 
    }

    multiply(a,b) { 
        this.validateArguments(a,b);
        return a * b; 
    }

    divide(a,b) { 
        this.validateArguments(a,b);
        if (b === 0) {
            throw new Error('Cannot divide by 0'); 
        }
        return a / b; 
    }
}

module.exports = Calculator;