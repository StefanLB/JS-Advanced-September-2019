const mathEnforcer = require('../04.MathEnforcer.js').mathEnforcer;
const assert = require('chai').assert;

let enforcer;
beforeEach('get new mathEnforcer instance', () => {
    enforcer = mathEnforcer;
});

describe('math enforcer tests', () => {
   it('add five with non-number should return undefined', () => {
       assert.equal(enforcer.addFive('5'),undefined);
   }) ;
    it('add five with non-number should return undefined', () => {
        assert.equal(enforcer.addFive([1,2]),undefined);
    }) ;
    it('add five with non-number should return undefined', () => {
        assert.equal(enforcer.addFive({a:1}),undefined);
    }) ;
    it('add five with number should return number + 5', () => {
        assert.equal(enforcer.addFive(1),6);
    }) ;
    it('add five with number should return number + 5', () => {
        assert.equal(enforcer.addFive(1.1),6.1);
    }) ;
    it('subtract ten with non-number should return undefined', () => {
        assert.equal(enforcer.subtractTen('5'),undefined);
    }) ;
    it('subtract ten with non-number should return undefined', () => {
        assert.equal(enforcer.subtractTen([1,2]),undefined);
    }) ;
    it('add five with neg number should return number + 5', () => {
        assert.equal(enforcer.addFive(-1),4);
    }) ;
    it('add five with neg number should return number + 5', () => {
        assert.equal(enforcer.addFive(-1.1),3.9);
    }) ;
    it('subtract ten with number should return number - 10', () => {
        assert.equal(enforcer.subtractTen(-1),-11);
    }) ;
    it('subtract ten with number should return number - 10', () => {
        assert.equal(enforcer.subtractTen(-1.1),-11.1);
    }) ;
    it('subtract ten with non-number should return undefined', () => {
        assert.equal(enforcer.subtractTen({a:1}),undefined);
    }) ;
    it('subtract ten with number should return number - 10', () => {
        assert.equal(enforcer.subtractTen(1),-9);
    }) ;
    it('subtract ten with number should return number - 10', () => {
        assert.equal(enforcer.subtractTen(1.1),-8.9);
    }) ;
    it('sum when one param is not number should return undefined', () => {
        assert.equal(enforcer.sum('one',1),undefined);
    }) ;
    it('sum when one param is not number should return undefined', () => {
        assert.equal(enforcer.sum(1,'one'),undefined);
    }) ;
    it('sum when one param is not number should return undefined', () => {
        assert.equal(enforcer.sum([1,2],1),undefined);
    }) ;
    it('sum when one param is not number should return undefined', () => {
        assert.equal(enforcer.sum(1,[1,2]),undefined);
    }) ;
    it('sum when one param is not number should return undefined', () => {
        assert.equal(enforcer.sum({a:1},1),undefined);
    }) ;
    it('sum when one param is not number should return undefined', () => {
        assert.equal(enforcer.sum(1,{a:1}),undefined);
    }) ;
    it('sum when both params are not number should return undefined', () => {
        assert.equal(enforcer.sum('one','one'),undefined);
    }) ;
    it('sum when both params are not number should return undefined', () => {
        assert.equal(enforcer.sum([1,2],[1,2]),undefined);
    }) ;
    it('sum when both params are not number should return undefined', () => {
        assert.equal(enforcer.sum({a:1},{a:1}),undefined);
    }) ;
    it('sum when both params are number should return sum', () => {
        assert.equal(enforcer.sum(1,1),2);
    }) ;
    it('sum when both params are number should return sum', () => {
        assert.equal(enforcer.sum(1.1,1.1),2.2);
    }) ;
    it('sum when both params are number should return sum', () => {
        assert.equal(enforcer.sum(1,1.1),2.1);
    }) ;
    it('sum when both params are number should return sum', () => {
        assert.equal(enforcer.sum(1.1,1),2.1);
    }) ;
    it('sum when both params are neg number should return sum', () => {
        assert.equal(enforcer.sum(-1,-1),-2);
    }) ;
    it('sum when both params are neg number should return sum', () => {
        assert.equal(enforcer.sum(-1.1,-1.1),-2.2);
    }) ;
    it('sum when both params are neg number should return sum', () => {
        assert.equal(enforcer.sum(-1,-1.1),-2.1);
    }) ;
    it('sum when both params are neg number should return sum', () => {
        assert.equal(enforcer.sum(-1.1,-1),-2.1);
    }) ;
});