const sum = require('../04.SumOfNumbers.js').sum;
const assert = require('chai').assert;

describe('sum function tests', () => {
   it('should return 2 for [1, 1]', () => {
       assert.equal(sum([1,1]),2);
   });
    it('should return 2 for ["1","1",]', () => {
        assert.equal(sum(["1","1"]),2);
    });
    it('should return -2 for [-1, -1]', () => {
        assert.equal(sum([-1,-1]),-2);
    });
});