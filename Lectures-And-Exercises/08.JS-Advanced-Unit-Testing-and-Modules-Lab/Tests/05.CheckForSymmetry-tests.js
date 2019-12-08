const isSymmetric = require('../05.CheckForSymmetry.js').isSymmetric;
const assert = require('chai').assert;

describe('isSymmetric tests', () => {
    it('should return true for input ["a","a"]', () => {
        assert.equal(isSymmetric(["a","a"]),true)
    });
    it('should return true for input ["a","b"]', () => {
        assert.equal(isSymmetric(["a","b"]),false)
    });
    it('should return false for non-array input "ab"', () => {
        assert.equal(isSymmetric("ab"),false)
    });
    it('should return true for empty array', () => {
        assert.equal(isSymmetric([]),true)
    });
    it('should return false for non-array input 1', () => {
        assert.equal(isSymmetric(1),false)
    });
    it('should not work with non-array object', () => {
        assert.isNotTrue(isSymmetric({ a: 5 }));
    });
    it('should return false for non-symmetric input', () => {
        assert.isFalse(isSymmetric([1, 2, 3, 4, 5]));
    });
    it('should work with one element in array', () => {
        assert.isTrue(isSymmetric([1]));
    });
    it('should work with odd amount of params', () => {
        assert.isNotFalse(isSymmetric([1, 2, 3, 4, 3, 2, 1]));
    });
    it('should work with arrays and objects as elements', () => {
        assert.isTrue(isSymmetric([{ a: 1 }, ['a', '1'], ['a', '1'], { a: 1 }]));
    });
});