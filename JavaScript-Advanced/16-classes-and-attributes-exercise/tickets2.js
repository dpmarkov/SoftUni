function solve(arr, criteria) {
    class Ticket{
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    function createTicket([destination, price, status]) {
        return new Ticket (destination, Number(price), status);
    }

    return arr
        .map((e) => e.split('|'))
        .map(createTicket)
        .sort((a, b) => {
            if (criteria == 'price'){
                return a.price - b.price;
            }

            return a[criteria].localeCompare(b[criteria]);
        });
}

console.log(
    solve(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
));