function tickets(ticketsArr,sortBy){

    class Ticket {
        constructor(destination,price,status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const sortedTickets = [];

    for (const ticket of ticketsArr) {
        const [destination,price,status] = ticket.split('|');
        let currentTicket = new Ticket(destination,price,status);
        sortedTickets.push(currentTicket);
    }

    sortedTickets.sort((t1,t2) => {
        if (sortBy === 'price'){ //in case sortBy = price
            return t1[sortBy] - t2[sortBy]
        }else {
            return t1[sortBy].localeCompare(t2[sortBy]);
        }
    })

    return sortedTickets;

}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'destination' );

// console.log(tickets(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'], 'destination' ));