const rgbToHexColor = require('../06.RGBtoHex.js').rgbToHexColor;
const assert = require('chai').assert;

describe('rgbToHex tests', () => {
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(-1,0,0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,-1,0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,0,-1),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(256,0,0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,256,0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,0,256),undefined)
    });
    it('correct input returns hexRgb', () => {
        assert.equal(rgbToHexColor(0,0,0),'#000000')
    });
    it('correct input returns hexRgb', () => {
        assert.equal(rgbToHexColor(255,255,255),'#FFFFFF')
    });
    it('string input returns undefined', () => {
        assert.equal(rgbToHexColor("255","255","255"),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor("pet",0,0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,"pet",0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,0,"pet"),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor([-1,256],0,0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,[-1,256],0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,0,[-1,256]),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor({a:1},0,0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,{a:1},0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,0,{a:1}),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,0,1.1),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(0,1.1,0),undefined)
    });
    it('incorrect input returns undefined', () => {
        assert.equal(rgbToHexColor(1.1,0,0),undefined)
    });
});

// negative values, > 255, decimals, non-numbers (string, array, object)