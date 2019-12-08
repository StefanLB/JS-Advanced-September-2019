class Library {
    constructor(libraryName){
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes  = {
            normal: libraryName.length,
            special: libraryName.length*2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type){
        if(typeof this.subscriptionTypes[type] === 'undefined'){
            throw new Error(`The type ${type} is invalid`)
        }

        let subscriber = this.subscribers.filter(x=>x.name === name)[0];

        if(subscriber === undefined){
            subscriber = {
                name: name,
                type: type,
                books: []
            };

            this.subscribers.push(subscriber);

        } else if (subscriber !== undefined){
            subscriber.type = type;
        }

        return subscriber;
    }

    unsubscribe(name){
        let subscriber = this.subscribers.filter(x=>x.name === name)[0];

        if(subscriber === undefined){
            throw new Error(`There is no such subscriber as ${name}`);
        }

        this.subscribers = this.subscribers.filter(x => x !== subscriber);

        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor){
        let subscriber = this.subscribers.filter(x=>x.name === subscriberName)[0];

        if(subscriber === undefined){
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        if(this.subscriptionTypes[subscriber.type] > subscriber.books.length){
            subscriber.books.push({
                title: bookTitle,
                author: bookAuthor
            });
        } else {
            throw new Error(`You have reached your subscription limit ${this.subscriptionTypes[subscriber.type]}!`)
        }

        return subscriber;

    }

    showInfo(){
        if(this.subscribers.length === 0){
            return `${this.libraryName} has no information about any subscribers`;
        }

        let output = [];

        this.subscribers.forEach(x => {
            output.push(`Subscriber: ${x.name}, Type: ${x.type}\nReceived books: `);
            let currentBooks = [];
            x.books.forEach(y => currentBooks.push(`${y.title} by ${y.author}`));
            output.push(currentBooks.join(', '));
            output.push('\n');
        });

        return output.join('').trim();
    }
}

let lib = new Library('Lib');
console.log(lib.showInfo());
lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

//lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
//lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
//lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

//console.log(lib.showInfo());

//console.log(lib.unsubscribe('Peter'));
//console.log(lib.unsubscribe('Peter'));

lib.subscribe('Vanio','normal');
lib.subscribe('Banio','normal');
console.log(lib.unsubscribe('Vanio','normal'));

//console.log(lib.unsubscribe('Maya'));