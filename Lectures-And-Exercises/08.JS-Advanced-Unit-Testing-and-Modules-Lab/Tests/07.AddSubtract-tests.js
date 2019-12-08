const createCalculator = require('../07.AddSubtract.js').createCalculator;
const assert = require('chai').assert;

let calculator;
beforeEach('get fresh calculator', () => {
    calculator = createCalculator();
});

describe('createCalculatorTests', () => {
    it('calculator should be an object', () => {
        assert.isObject(calculator);
    });
    it('add should be a function', () => {
        assert.isFunction(calculator.add);
    });
    it('subtract should be a function', () => {
        assert.isFunction(calculator.subtract);
    });
    it('get should be a function', () => {
        assert.isFunction(calculator.get);
    });
    it('add should not return value', () => {
        assert.equal(calculator.add(1),undefined);
    });
    it('subtract should not return value', () => {
        assert.equal(calculator.subtract(1),undefined);
    });
    it('get should return value', () => {
        assert.equal(calculator.get(),0);
    });
    it('calculator should add string value number', () => {
        calculator.add('1');
        assert.equal(calculator.get(),1);
    });
    it('calculator should remove string value number', () => {
        calculator.subtract('1');
        assert.equal(calculator.get(),-1);
    });
    it('should return NaN for non-number addition', () => {
        calculator.add('notANumber');
        assert.isNaN(calculator.get());
    });
    it('should return NaN for non-number subtraction', () => {
        calculator.subtract('notANumber');
        assert.isNaN(calculator.get());
    });
    it('calculator should handle multiple consecutive operations', () => {
        calculator.subtract('10');
        calculator.add('15');
        calculator.subtract(30);
        calculator.add(45);
        assert.equal(calculator.get(),20);
    });
});