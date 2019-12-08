const isOddOrEven = require('../02.EvenOrOdd.js').isOddOrEven;
const assert = require('chai').assert;

describe('isOddOrEven tests', () => {
    it('returns "even" when provided with even chars', () => {
        assert.equal(isOddOrEven('aa'),"even");
    });
    it('returns "odd" when provided with odd chars', () => {
        assert.equal(isOddOrEven('a'),"odd");
    });
    it('returns undefined when provided with number', () => {
        assert.equal(isOddOrEven(1),undefined);
    });
    it('returns undefined when provided with array', () => {
        assert.equal(isOddOrEven(['a','b']),undefined);
    });
    it('returns undefined when provided with object', () => {
        assert.equal(isOddOrEven({a:1}),undefined);
    });
});