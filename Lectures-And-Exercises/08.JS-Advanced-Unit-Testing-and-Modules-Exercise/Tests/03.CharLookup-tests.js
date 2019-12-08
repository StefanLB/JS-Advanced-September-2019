const lookupChar = require('../03.CharLookup.js').lookupChar;
const assert = require('chai').assert;

describe('lookupChar tests', () => {
   it('should return correct char provided with correct params', () => {
        assert.equal(lookupChar('abc',1),'b');
   });
    it('should return incorrect index for i > length', () => {
        assert.equal(lookupChar('abc',3),'Incorrect index');
    });
    it('should return incorrect index for i < 0', () => {
        assert.equal(lookupChar('abc',-1),'Incorrect index');
    });
    it('should return undefined for non-string param passed', () => {
    assert.equal(lookupChar(5,0),undefined);
    });
    it('should return undefined for non-string param passed', () => {
    assert.equal(lookupChar(['a','b'],0),undefined);
    });
    it('should return undefined for non-string param passed', () => {
    assert.equal(lookupChar({a:1},0),undefined);
    });
    it('should return undefined for non-number param passed', () => {
        assert.equal(lookupChar('abc','one'),undefined);
    });
    it('should return undefined for non-number param passed', () => {
        assert.equal(lookupChar('abc',[1,2]),undefined);
    });
    it('should return undefined for non-number param passed', () => {
        assert.equal(lookupChar('abc',{a:1}),undefined);
    });
    it('should return undefined for non-string and non-number params passed', () => {
        assert.equal(lookupChar({a:1},{a:1}),undefined);
    });
    it('should return correct char for i = 0', () => {
        assert.equal(lookupChar('abc',0),'a');
    });
    it('should return correct char for i = length-1', () => {
        let word = 'abc';
        assert.equal(lookupChar(word,word.length-1),'c');
    });
    it('should return undefined for non-integer param passed', () => {
        assert.equal(lookupChar('abc',1.5),undefined);
    });
});