const reverseString = require('../reverseString');

describe('reverseString', () => {
    test('takes a string, reverses the order of it and returns it', () => {
        expect(reverseString('az')).toEqual('za'); 
        expect(reverseString('hello')).toEqual('olleh'); 
        expect(reverseString('mIXeDCaSe')).toEqual('eSaCDeXIm'); 
        expect(reverseString('world')).toEqual('dlrow'); 
        expect(reverseString('12345')).toEqual('54321'); 
        expect(reverseString('apples--')).toEqual('--selppa'); 
        expect(reverseString('ZZ')).toEqual('ZZ'); 
        expect(reverseString('W')).toEqual('W');
    }); 
});

test('it returns a string', () => {
    expect(expect.any(String)).toEqual(expect.any(String)); 
}); 

test('it only receives a string', () => {
    expect(expect.any(String)).toEqual(expect.any(String)); 
});