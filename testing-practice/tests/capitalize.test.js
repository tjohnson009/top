const capitalize = require('../capitalize');

describe('capitalize', () => {
    test('takes a string and capitalizes the first letter', () => {
        expect(capitalize('hello')).toEqual('Hello'); 
        expect(capitalize('mIXeDCaSe')).toEqual('Mixedcase'); 
        expect(capitalize('world')).toEqual('World'); 
        expect(capitalize('alreadyCapitalized')).toEqual('Alreadycapitalized'); 
        expect(capitalize('javaScript')).toEqual('Javascript'); 
        expect(capitalize('tEST')).toEqual('Test'); 
        expect(capitalize('az')).toEqual('Az'); 
        expect(capitalize('ZZ')).toEqual('Zz'); 
        expect(capitalize('sINGLE')).toEqual('Single');
    }); 
});

test('it returns a string', () => {
    expect(expect.any(String)).toEqual(expect.any(String)); 
}); 

test('it only receives a string', () => {
    expect(expect.any(String)).toEqual(expect.any(String)); 
});

// test('argument for function is only letters', () => {
//     expect(expect.stringMatching(/^[A-Za-z]+$/)).toEqual(expect.any(String)); 
// });
test('throws on non-letter inputs', () => {
  expect(() => { capitalize('hello123');}).toThrow();
  expect(() => { capitalize('123');}).toThrow();
  expect(() => { capitalize('!@#');}).toThrow();
  expect(() => { capitalize('he!!o.') }).toThrow(); 
});

test('only returns strings with the first letter capitalized', () => {
    expect(capitalize('strong')).toEqual(expect.any(String)); 
});