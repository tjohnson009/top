const Calculator = require('../calculator');    

describe('calculator', () => {
    let calc; 

    beforeEach(() => {
        calc = new Calculator();
    }); 
    
    it('adds two numbers together', () => {
        expect(calc.add(2,5)).toEqual(7);
        expect(calc.add(-2,5)).toEqual(3);
        expect(calc.add(-2,-5)).toEqual(-7);
        expect(calc.add(1.5, 3.5)).toEqual(5); 
    }); 

    test('throws on invalid arguments', () => {
        expect(() => calc.validateArguments(2,'5')).toThrow();
        expect(() => calc.validateArguments(null,5)).toThrow();
        expect(() => calc.validateArguments([],{})).toThrow();
        expect(() => calc.validateArguments()).toThrow(); // no arguments
        expect(() => calc.validateArguments(2)).toThrow(); // one argument
        // expect(() => calc.validateArguments(2, 0)).toThrow(); // division by zero
    }); 

    it('subtracts one number from another namnely a - b', () => {
        expect(calc.subtract(2,5)).toEqual(-3); 
        expect(calc.subtract(8,5)).toEqual(3); 
        expect(calc.subtract(255, 255)).toEqual(0); 
        expect(calc.subtract(255, 0)).toEqual(255); 
        expect(calc.subtract(255555, 555)).toEqual(255000); 
        expect(calc.subtract(2, 1.5)).toBeCloseTo(0.5, 4); 
    }); 

    test('multiples two numbers together', () => {
        expect(calc.multiply(3, 4)).toBe(12);             
        expect(calc.multiply(-3, 4)).toBe(-12);            
        expect(calc.multiply(-3, -4)).toBe(12);          
        expect(calc.multiply(0, 7)).toBe(0);              
        expect(calc.multiply(9, 1)).toBe(9);              
        expect(calc.multiply(2.5, 4)).toBe(10);  
    });

    it('divides one number from another - namely a / b', () => {
        expect(calc.divide(8, 4)).toBe(2);             
        expect(calc.divide(3, 4)).toBeCloseTo(.75);            
        expect(calc.divide(-36, -4)).toBe(9);          
        expect(calc.divide(-36, 4)).toBe(-9);          
        expect(calc.divide(0, 7)).toBe(0);     
        expect(() => calc.divide(7, 0)).toThrow();          
        expect(calc.divide(9, 1)).toBe(9);              
        expect(calc.divide(20, 4)).toBe(5);  
    })



}); 