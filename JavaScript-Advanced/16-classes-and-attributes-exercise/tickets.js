function solve(inputData, sortCriterion) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = [];

    for (let item of inputData) {
        let [destination, price, status] = item.split('|');

        price = Number(price);

        let ticket = new Ticket(destination, price, status);

        tickets.push(ticket);
    }

    const sorted = tickets.sort((a, b) => {
        if (typeof a[sortCriterion] == 'number'){
            return a-b;
        }

        return a[sortCriterion].localeCompare(b[sortCriterion]);
    });

    return sorted;
}

solve(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'destination'
);

solve(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'
    ],
    'status'
)