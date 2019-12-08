const StringBuilder = require('../05.StringBuilder.js').StringBuilder;
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('stringBuilder tests',() => {
    it('creates an instance with string param', () => {
        let str = new StringBuilder('test');
        assert.equal(str.toString(),'test');
    });
    it('creates an empty array with undefined param', () => {
        let str = new StringBuilder(undefined);
        assert.equal(str.toString(),'');
    });
    it('creates an empty array with no param', () => {
        let str = new StringBuilder();
        assert.equal(str.toString(),'');
    });
    it('throws error when constructor not provided string', () => {
        expect(() => new StringBuilder(1)).to.throw('Argument must be string');
    });
    it('throws error when constructor not provided string', () => {
        assert.throws(() => new StringBuilder(1),TypeError, 'Argument must be string');
    });
    it('throws error when constructor not provided string', () => {
        assert.throws(() => new StringBuilder([1]),TypeError, 'Argument must be string');
    });
    it('throws error when constructor not provided string', () => {
        assert.throws(() => new StringBuilder({a:1}),TypeError, 'Argument must be string');
    });
    it('appends correctly when string is provided', () => {
        let str = new StringBuilder('test');
        str.append('test2');
        str.append('test3');
        str.append('');
        assert.equal(str.toString(),'testtest2test3');
    });
    it('throws error when append not provided string', () => {
        let str = new StringBuilder('test');
        assert.throws(() => str.append(1),TypeError, 'Argument must be string');
    });
    it('throws error when append not provided string', () => {
        let str = new StringBuilder('test');
        assert.throws(() => str.append([1,2]),TypeError, 'Argument must be string');
    });
    it('throws error when append not provided string', () => {
        let str = new StringBuilder('test');
        assert.throws(() => str.append({a:1}),TypeError, 'Argument must be string');
    });

    it('prepends correctly when string is provided', () => {
        let str = new StringBuilder('test');
        str.prepend('test2');
        str.prepend('test3');
        str.prepend('');
        assert.equal(str.toString(),'test3test2test');
    });
    it('throws error when prepend not provided string', () => {
        let str = new StringBuilder('test');
        assert.throws(() => str.prepend(1),TypeError, 'Argument must be string');
    });
    it('throws error when prepend not provided string', () => {
        let str = new StringBuilder('test');
        assert.throws(() => str.prepend([1,2]),TypeError, 'Argument must be string');
    });
    it('throws error when prepend not provided string', () => {
        let str = new StringBuilder('test');
        assert.throws(() => str.prepend({a:1}),TypeError, 'Argument must be string');
    });

    it('inserts correctly when string is provided', () => {
        let str = new StringBuilder('test');
        str.insertAt('test2',0);
        str.insertAt('test3',50);
        str.insertAt('',0);
        assert.equal(str.toString(),'test2testtest3');
    });
    it('inserts correctly when string is provided', () => {
        let str = new StringBuilder('test');
        str.insertAt('test2',0);
        str.insertAt('test3',3);
        str.insertAt('',0);
        assert.equal(str.toString(),'testest3t2test');
    });
    it('throws error when insert not provided string', () => {
        let str = new StringBuilder('test');
        assert.throws(() => str.insertAt(1,0),TypeError, 'Argument must be string');
    });
    it('throws error when insert not provided string', () => {
        let str = new StringBuilder('test');
        assert.throws(() => str.insertAt([1,2],0),TypeError, 'Argument must be string');
    });
    it('throws error when insert not provided string', () => {
        let str = new StringBuilder('test');
        assert.throws(() => str.insertAt({a:1},0),TypeError, 'Argument must be string');
    });

    it('removes correctly', () => {
        let str = new StringBuilder('test');
        str.remove(0,50);
        assert.equal(str.toString(),'');
    });
    it('removes correctly', () => {
        let str = new StringBuilder('test');
        str.remove(1,50);
        assert.equal(str.toString(),'t');
    });
    it('removes correctly', () => {
        let str = new StringBuilder('test');
        str.remove(-1,1);
        assert.equal(str.toString(),'tes');
    });
    it('removes correctly', () => {
        let str = new StringBuilder('test');
        str.remove(50,100);
        assert.equal(str.toString(),'test');
    });
    it('removes correctly', () => {
        let str = new StringBuilder('test');
        str.remove(50,1);
        assert.equal(str.toString(),'test');
    });
    it('removes correctly', () => {
        let str = new StringBuilder('test');
        str.remove(1,2);
        assert.equal(str.toString(),'tt');
    });
    it('functions properly with all commands used', () => {
        let str = new StringBuilder('test');
        str.append('ggg');
        str.prepend('zzz');
        str.insertAt('aaa',3);
        str.remove(4,2);
        assert.equal(str.toString(),'zzzatestggg');
    });
    it("The result to be an instance of class StringBuilder", () => {
        let result = new StringBuilder('hello');
        expect(result).to.be.an.instanceOf(StringBuilder);
    });
    it("To have property 'append'", function () {
        let result = new StringBuilder('hello');
        expect(result).to.have.property("append");
    });
    it("To have property 'prepend'", function () {
        let result = new StringBuilder('hello');
        expect(result).to.have.property("prepend");
    });
    it("To have property 'insertAt'", function () {
        let result = new StringBuilder('hello');
        expect(result).to.have.property("insertAt");
    });
    it("To have property 'remove'", function () {
        let result = new StringBuilder('hello');
        expect(result).to.have.property("remove");
    });
    it("To have property 'toString'", function () {
        let result = new StringBuilder('hello');
        expect(result).to.have.property("toString");
    });
    it('has all properties in the constructor', function () {
        let builder = new StringBuilder('test');
        expect(builder.hasOwnProperty('_stringArray')).to.equal(true, "Missing _stringArray property");
    });
    it("It should have initialized all methods", function() {
        let builder = new StringBuilder('test');
        expect(Object.getPrototypeOf(builder).hasOwnProperty('append')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('prepend')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('insertAt')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('remove')).to.be.equal(true)
        expect(Object.getPrototypeOf(builder).hasOwnProperty('toString')).to.be.equal(true)
    })
});