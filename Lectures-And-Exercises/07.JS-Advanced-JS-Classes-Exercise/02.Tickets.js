function tickets(params, criteria) {
    class Ticket {
        constructor (destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const tickets = [...params].reduce((accumulator, element) => {
        const ticket = new Ticket(...element.split(/\|/));
        accumulator.push(ticket);
        return accumulator;
    }, []);

    return criteria === 'price' ? tickets.sort((a,b) => a[criteria] > b[criteria])
        : tickets.sort((a,b) => a[criteria].localeCompare(b[criteria]));
}