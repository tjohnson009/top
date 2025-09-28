const analyzeArray = require('../analyzeArray'); 

describe('array analyzer', () => {

    it('returns an object', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual(expect.any(Object)); 
        expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
   average: 4,
   min: 1,
   max: 8,
   length: 6
});     expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({
      length: 5,
      min: 1,
      max: 5,
      average: 3
    });
    expect(analyzeArray([10, -5, 7, 3])).toMatchObject({
      length: 4,
      min: -5,
      max: 10,
      average: 3.75
    });
    expect(analyzeArray([42])).toMatchObject({
      length: 1,
      min: 42,
      max: 42,
      average: 42
    });
    expect(analyzeArray([2.5, 3.5, 4.5])).toMatchObject({
      length: 3,
      min: 2.5,
      max: 4.5,
      average: 3.5
    });
    expect(analyzeArray([-10, -20, -5, -15])).toMatchObject({
      length: 4,
      min: -20,
      max: -5,
      average: -12.5
    });
    });

    test('throws if the array is not of exclusively numbers', () => {
        expect(() => analyzeArray(['a'])).toThrow('All items of array must be numbers.'); 
        expect(() => analyzeArray([1, 2, '3'])).toThrow('All items of array must be numbers.'); 
        expect(() => analyzeArray([null])).toThrow('All items of array must be numbers.'); 
        expect(() => analyzeArray(1,2, undefined)).toThrow('Input must be an array'); 
        expect(() => analyzeArray('not an array')).toThrow('Input must be an array');
        expect(() => analyzeArray(null)).toThrow('Input must be an array');
        expect(() => analyzeArray(undefined)).toThrow('Input must be an array');
    })
    
    it('returns the length as a property in the returned object', () => {
        expect(analyzeArray([1,2,3])).toMatchObject({length: 3}); 
        expect(analyzeArray([1,3])).toMatchObject({length: 2}); 
        expect(analyzeArray([0])).toMatchObject({length: 1}); 
        expect(analyzeArray([1,2,3,4,5,6,7,8,9])).toMatchObject({length: 9}); 
        expect(analyzeArray([])).toMatchObject({length: 0}); 
    });

    it('returns the average as a property in the returned object', () => {
        expect(analyzeArray([1,2,3])).toMatchObject({average: 2}); 
        expect(analyzeArray([1,3])).toMatchObject({average: 2}); 
        expect(analyzeArray([0, 0, 0, 0])).toMatchObject({average: 0}); 
        expect(analyzeArray([0, 0, 0, 1])).toMatchObject({average: .25}); 
        expect(analyzeArray([9,9,9,9,9,9,9,9,9])).toMatchObject({average: 9}); 
        expect(analyzeArray([])).toMatchObject({average: 0}); 
    });

    it('returns the minimum as a property in the returned object', () => {
    expect(analyzeArray([5, 10, 3, 8, 7])).toMatchObject({min: 3});
    expect(analyzeArray([4, -1, 7, 0, -5])).toMatchObject({min: -5});
    expect(analyzeArray([-10, -50, -3, -4])).toMatchObject({min: -50});
    expect(analyzeArray([42])).toMatchObject({min: 42});
    expect(analyzeArray([4, 7, 4, 2, 2, 9])).toMatchObject({min: 2});
    expect(analyzeArray([2.5, 3.1, 0.9, 0.95])).toMatchObject({min: .9});
    expect(analyzeArray([5, 3, 0, 8, 10])).toMatchObject({min: 0});
    expect(analyzeArray([999999, 123456, -1000000, 0, 42])).toMatchObject({min: -1000000});
    expect(analyzeArray([])).toMatchObject({min: 0});
    });

    it('returns the maximum as a property in the returned object', () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toMatchObject({ max: 5 });
    expect(analyzeArray([10, -5, 7, 3])).toMatchObject({ max: 10 });
    expect(analyzeArray([42])).toMatchObject({ max: 42 });
    expect(analyzeArray([-10, -20, -5, -15])).toMatchObject({ max: -5 });
    expect(analyzeArray([2.5, 3.5, 4.5])).toMatchObject({ max: 4.5 });
    expect(analyzeArray([0, 0, 0])).toMatchObject({ max: 0 });
    expect(analyzeArray([999, 1000, 500, 750])).toMatchObject({ max: 1000 });
    expect(analyzeArray([1, 1, 1, 1])).toMatchObject({ max: 1 });
    expect(analyzeArray([-100, -50, -75, -10])).toMatchObject({ max: -10 });
    expect(analyzeArray([1.1, 1.9, 1.5, 1.8])).toMatchObject({ max: 1.9 });
    });

})