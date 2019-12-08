let SkiResort = require('../solution').SkiResort;
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('SkiResort', function () {
    it('should properly instantiate',() => {
        let resort = new SkiResort('testName');

        assert.equal(resort.name, 'testName');
        assert.equal(resort.voters,0);
        assert.deepEqual(resort.hotels,[]);
    });
    it('returns no voters yet', () => {
        let resort = new SkiResort('testName');
        assert.equal(resort.bestHotel,'No votes yet');
    });
    it('gets best hotel', () => {
        let res = new SkiResort("Some");
        res.build("Sun", 10);
        res.build('Avenue',5);
        res.book('Sun', 5);
        res.book('Avenue', 5);
        res.leave('Sun', 3, 2);
        res.leave('Avenue', 3, 3);
        res.book('Avenue', 3);
        res.leave('Avenue', 3, 0.5);
        res.averageGrade();

        assert.equal(res.bestHotel,'Best hotel is Avenue with grade 10.5. Available beds: 3');
    });
    it('throws error', () => {
        let res = new SkiResort("Some");
        let incorrectBuild = () => {res.build("", 10)};
        let incorrectBuild2 = () => {res.build("a", 0)};

        assert.throws(incorrectBuild,Error,'Invalid input');
        assert.throws(incorrectBuild2,Error,'Invalid input');
    });
    it('builds correctly', () => {
        let res = new SkiResort("Some");

        res.build("sun",10);

        assert.equal(res.hotels[0].name, "sun");
        assert.equal(res.hotels[0].beds, 10);
        assert.equal(res.hotels[0].points, 0);
        assert.equal(res.build("sun2",15),'Successfully built new hotel - sun2');
    });
    it('throws error on incorrect booking', () => {
        let res = new SkiResort("Some");
        res.build("Sun", 10);
        let incorrBook = () => {res.book('', 5)};
        let incorrBook2 = () => {res.book('a', 0)};

        assert.throws(incorrBook,Error,'Invalid input');
        assert.throws(incorrBook2,Error,'Invalid input');
    });
    it('throws error on incorrect booking', () => {
        let res = new SkiResort("Some");
        res.build("Sun", 10);

        let incorrectHotName = () => {res.book('incor',3)};
        assert.throws(incorrectHotName,Error,'There is no such hotel');

        res.book('Sun', 10);

        let incorrectNumBeds = () => {res.book('Sun',5)};

        assert.throws(incorrectNumBeds,Error,'There is no free space');
    });
    it('books successfully', () =>{
       let res = new SkiResort('Some');

       res.build("Sun",10);

       assert.equal(res.book('Sun',5),'Successfully booked');
    });
    it('leaves successfully', () => {
        let res = new SkiResort('Some');
        res.build("Sun",10);
        res.book("Sun",5);

        assert.equal(res.leave('Sun', 3, 2),'3 people left Sun hotel');
    });
    it('throws on incorrect leave', () => {
        let res = new SkiResort('Some');
        res.build("Sun",10);
        res.book("Sun",5);

        let incorrectName = () => {res.leave('',5,2)};
        let incorrectBeds = () => {res.leave('Sun',0,2)};
        let incorrectHotName = () => {res.leave('Sunn',5,2)}

        assert.throws(incorrectName,Error,'Invalid input');
        assert.throws(incorrectBeds,Error,'Invalid input');
        assert.throws(incorrectHotName,Error,'There is no such hotel');


    });
    it('returns no voters', () => {
        let res = new SkiResort("Some");

        assert.equal(res.averageGrade(),'No votes yet');

    });
    it('gets average grade', () => {
        let res = new SkiResort("Some");
        res.build("Sun", 10);
        res.build('Avenue',5);
        res.book('Sun', 5);
        res.book('Avenue', 5);
        res.leave('Sun', 3, 2);
        res.leave('Avenue', 3, 3);
        res.book('Avenue', 3);
        res.leave('Avenue', 3, 0.5);

        assert.equal(res.averageGrade(),'Average grade: 1.83');
    });
});
