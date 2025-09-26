const caesar = require('../caesarCypher'); 

describe('Caesar cypher', () => {
    it('shifts the letters of a string a set amount in alphabetical order', () => {
        expect(caesar('xyz', 3)).toEqual('abc'); 
        expect(caesar('timothy', 10)).toEqual('dswydri'); 
        expect(caesar('z', 1)).toEqual('a'); 
        expect(caesar('abc', 1)).toEqual('bcd');          // simple shift forward
        expect(caesar('abc', 26)).toEqual('abc');         // full alphabet wrap
        expect(caesar('abc', 52)).toEqual('abc');         // double wrap-around
        expect(caesar('abc', -1)).toEqual('zab');         // negative shift backward
        expect(caesar('hello', 13)).toEqual('uryyb');     // ROT13 standard test
    }); 

    it('returns a string that preserves the original casing of the letters', () => {
        expect(caesar('Arizona', 10)).toEqual('Kbsjyxk'); 
        expect(caesar('XYZ', 3)).toEqual('ABC'); 
        expect(caesar('AbCz', 4)).toEqual('EfGd'); 
        expect(caesar('HelloWorld', 5)).toEqual('MjqqtBtwqi');   // mixed upper/lower
        expect(caesar('CaEsAr', 2)).toEqual('EcGuCt');           // alternating case
        expect(caesar('Zebra', 1)).toEqual('Afcsb');             // wrap uppercase + lower
        expect(caesar('TesT', -5)).toEqual('OznO');              // negative shift
        expect(caesar('JavaScript', 13)).toEqual('WninFpevcg');  // ROT13 with casing
    }); 

    it('ignores but passes on non-letter characters', () => {
        expect(caesar('Hello, World!', 5)).toEqual('Mjqqt, Btwqi!');   // punctuation
        expect(caesar('1234', 7)).toEqual('1234');                     // digits unchanged
        expect(caesar('abc-def', 1)).toEqual('bcd-efg');               // hyphen unchanged
        expect(caesar('hello.world', 2)).toEqual('jgnnq.yqtnf');       // dot unchanged
        expect(caesar('mix3d-CASE!', 4)).toEqual('qmb3h-GEWI!');       // mixed non-letters
    }); 
})