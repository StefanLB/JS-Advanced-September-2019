const BookStore = require('./02. Book Store_Ресурси').BookStore;
const assert = require('chai').assert;
const expect = require('chai').expect;

describe('BookstoreTests', () => {
    it("It should have initialized all methods", function() {
        let store = new BookStore('Store');
        expect(Object.getPrototypeOf(store).hasOwnProperty('stockBooks')).to.be.equal(true);
        expect(Object.getPrototypeOf(store).hasOwnProperty('hire')).to.be.equal(true);
        expect(Object.getPrototypeOf(store).hasOwnProperty('fire')).to.be.equal(true);
        expect(Object.getPrototypeOf(store).hasOwnProperty('sellBook')).to.be.equal(true);
        expect(Object.getPrototypeOf(store).hasOwnProperty('printWorkers')).to.be.equal(true);
    });
    it('should initialize properly', () => {
        let store = new BookStore('Store');

        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

        store.hire('George', 'seller');
        store.hire('Ina', 'seller');
        store.hire('Tom', 'juniorSeller');

        store.sellBook('Inferno', 'Ina');
        store.stockBooks(['Harry Potter-J.Rowling']);

        store.fire('Tom');

        assert.equal(store.printWorkers(),'Name:George Position:seller BooksSold:0\nName:Ina Position:seller BooksSold:1');
    });
    it('method returns correct value', function()
    {
        let store = new BookStore('Store');
        let booksToAdd = ['Inferno-Dan Braun', "Book-Avtor Avtorov"];
        let expected = [{ title:'Inferno', author:'Dan Braun'}, { title: 'Book', author:'Avtor Avtorov'}];

        assert.deepEqual(store.stockBooks(booksToAdd), expected);
    });
    it('', () => {
        let store = new BookStore('Store');

        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

        store.hire('George', 'seller');
        store.hire('Ina', 'seller');
        store.hire('Tom', 'juniorSeller');

        store.sellBook('Inferno', 'Ina');
        store.stockBooks(['Harry Potter-J.Rowling']);

        assert.equal(store.fire('Tom'),'Tom is fired');

    });
    it('', () => {
        let store = new BookStore('Store');

        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

        store.hire('George', 'seller');
        store.hire('Ina', 'seller');
        assert.equal(store.hire('Tom', 'juniorSeller'),'Tom started work at Store as juniorSeller');

    });
    it('', () => {
        let store = new BookStore('Store');

        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

        store.hire('George', 'seller');
        assert.equal(store.hire('Ina', 'seller'),'Ina started work at Store as seller');

    });
    it('', () => {
        let store = new BookStore('Store');

        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

        assert.equal(store.hire('George', 'seller'),'George started work at Store as seller');
    });
    it('should initialize properly', () => {
        let store = new BookStore('Store');

        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

        store.hire('Tom', 'juniorSeller');

        store.fire('Tom');
        checkThrows = () => {store.fire('Tom');};

        assert.throws(checkThrows, Error, "Tom doesn't work here");
    });
    it('should initialize properly', () => {
        let store = new BookStore('Store');

        store.stockBooks(['Inferno-Dan Braun', 'Harry Potter-J.Rowling', 'Uncle Toms Cabin-Hariet Stow', 'The Jungle-Upton Sinclear']);

        store.hire('Tom', 'juniorSeller');

        checkThrows = () => {store.hire('Tom', 'juniorSeller');};

        assert.throws(checkThrows, Error, "This person is our employee");
    });
    describe('sellBook', function() {
        it('method throws error if book does not exist', function () {
            let store = new BookStore('Store');
            store.hire('gosho', 'asd');
            assert.throws(() => store.sellBook('book', 'gosho'), 'This book is out of stock');
        });

        it('method throws error if worker does not exist', function () {
            let store = new BookStore('Store');
            store.hire('gosho', 'asd');
            store.stockBooks(['book-author']);
            assert.throws(() => store.sellBook('book', 'pesho'), 'pesho is not working here');
        });

        it('method removes book from books collection after successful sale', function()
        {
            let store = new BookStore('Store');
            store.hire('gosho', 'asd');
            store.stockBooks(['book1-author', 'book2-author']);
            store.sellBook('book1', 'gosho');

            let expectedBooks = [{title: 'book2', author: 'author'}];
            let actualBooks = store.books;

            assert.deepEqual(actualBooks, expectedBooks);
        });
    });
});