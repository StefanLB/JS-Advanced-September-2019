const PaymentPackage = require('../06.PaymentPackage').PaymentPackage;
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('PaymentPackage tests',() => {
    it("It should have initialized all methods", function() {
        let package = new PaymentPackage('testName',1);
        expect(Object.getPrototypeOf(package).hasOwnProperty('name')).to.be.equal(true);
        expect(Object.getPrototypeOf(package).hasOwnProperty('value')).to.be.equal(true);
        expect(Object.getPrototypeOf(package).hasOwnProperty('VAT')).to.be.equal(true);
        expect(Object.getPrototypeOf(package).hasOwnProperty('active')).to.be.equal(true);
        expect(Object.getPrototypeOf(package).hasOwnProperty('toString')).to.be.equal(true);
    });
    it('creates an instance with correct input params', () => {
        let package = new PaymentPackage('testName',1);
        assert.equal(package.toString(), 'Package: testName\n- Value (excl. VAT): 1\n- Value (VAT 20%): 1.2');
    });
    it('creates an instance and modifies it with correct input params', () => {
        let package = new PaymentPackage('testName',1);
        package.name = 'testChange';
        package.value = 0;
        package.VAT = 21;
        package.active = false;
        assert.equal(package.toString(), 'Package: testChange (inactive)\n- Value (excl. VAT): 0\n- Value (VAT 21%): 0');
    });

    //error throwing
    it('throws error for incorrect name', () => {
        let package = new PaymentPackage('testName',1);
        assert.throws(() => {package.name = {a:1}}, Error, 'Name must be a non-empty string');
        assert.throws(() => {package.name = ''}, Error, 'Name must be a non-empty string');
    });
    it('throws error for incorrect value', () => {
        let package = new PaymentPackage('testName',1);
        assert.throws(() => {package.value = -1}, Error, 'Value must be a non-negative number');
        assert.throws(() => {package.value = 'one'}, Error, 'Value must be a non-negative number');
    });
    it('throws error for incorrect VAT', () => {
        let package = new PaymentPackage('testName',1);
        assert.throws(() => {package.VAT = -1}, Error, 'VAT must be a non-negative number');
        assert.throws(() => {package.VAT = 'one'}, Error, 'VAT must be a non-negative number');
    });
    it('throws error for incorrect active status', () => {
        let package = new PaymentPackage('testName',1);
        assert.throws(() => {package.active = -1}, Error, 'Active status must be a boolean');
    });
    it('throws error for incorrect constructor params', () => {
        assert.throws(() => new PaymentPackage(), Error);
    });
    it('throws error for incorrect constructor params', () => {
        assert.throws(() => new PaymentPackage('',-1), Error);
    });
    it('throws error for incorrect constructor params', () => {
        assert.throws(() => new PaymentPackage('a',-1), Error);
    });
    it('throws error for incorrect constructor params', () => {
        assert.throws(() => new PaymentPackage('',1), Error);
    });
    it('throws error for incorrect constructor params', () => {
        assert.throws(() => new PaymentPackage([{a:1}]), Error);
    });
    it('should initialized with correct toString and change VAT to 0', function () {
        let pp = new PaymentPackage('JS', 0);
        pp.VAT = 0;
        let actual = pp.toString();
        let expected = 'Package: JS\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0';

        assert.equal(actual, expected);
    });
    it('throw error when change active to negative number', function () {
        let actual = function () {
            let pp = new PaymentPackage('JS', 10);
            pp.active = -6;
        };
        let expected = 'Active status must be a boolean';

        assert.throws(actual, expected);
    });
    it('throw error when change VAT to negative number', function () {
        let actual = function () {
            let pp = new PaymentPackage('JS', 10);
            pp.VAT = -6;
        };
        let expected = 'VAT must be a non-negative number';

        assert.throws(actual, expected);
    });
    it('should initialized with correct active', function () {
        let pp = new PaymentPackage('JS', 10);
        let actual = true;
        let expected = pp.active;

        assert.equal(actual, expected);
    });
});