class Bank {
    allCustomers = [];
    #bankName = undefined;

    constructor(bankName) {
        this.#bankName = bankName;
    }

    newCustomer(customer) {
        if (this.allCustomers.some(c => c.personalId === customer.personalId)) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }

        this.allCustomers.push(customer);
        return customer;

    }

    depositMoney(personalId, amount) {

        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (customer.totalMoney) {
            customer.totalMoney += Number(amount);
        } else {
            customer.totalMoney = Number(amount);
            customer.transactions = [];
        }

        customer.transactions.push({
            id: customer.transactions.length + 1,
            firstName: customer.firstName,
            lastName: customer.lastName,
            amount: amount,
            type: 'made deposit of',
        });

        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }

        customer.totalMoney -= amount;
        customer.transactions.push({
            id: customer.transactions.length + 1,
            firstName: customer.firstName,
            lastName: customer.lastName,
            amount,
            type: 'withdrew'
        });
        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        const customer = this.allCustomers.find(c => c.personalId === personalId);

        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }

        const cInfo = [];
        cInfo.push(`Bank name: ${this.#bankName}`,
            `Customer name: ${customer.firstName} ${customer.lastName}`,
            `Customer ID: ${customer.personalId}`,
            `Total Money: ${customer.totalMoney}$`,
            `Transactions:`);
        customer.transactions.sort((t1, t2) => t2.id - t1.id);
        customer.transactions.forEach(t => {
            cInfo.push(`${t.id}. ${t.firstName} ${t.lastName} ${t.type} ${t.amount}$!`);
        });
        return cInfo.join('\n');
    }
}

let bank = new Bank(`SoftUni Bank`);

console.log(bank.newCustomer({firstName: `Svetlin`, lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
let c = bank.newCustomer({firstName: `Mehmed`, lastName: 'Mehmed', personalId: 9433267})
console.log(c.firstName)

Unexpected
error: Incorrect
output: expected
'Bank name: SoftUni Bank' +
'\nCustomer name: Svetlin Nakov' +
'\nCustomer ID: 1111111' +
'\nTotal Money: 375$' +
'\nTransactions:' +
'\n3. Svetlin Nakov withdrew 125$!' +
'\n2. Svetlin Nakov made deposit of 250$!' +
'\n1. Svetlin Nakov made deposit of 250$!'
to
equal
'Bank name: SoftUni Bank' +
'\nCustomer name: Svetlin Nakov' +
'\nCustomer ID: 1111111' +
'\nTotal Money: 375$' +
'\nTransactions:' +
'\n3. undefined Nakov withdrew 125$!' +
'\n2. Svetlin Nakov made deposit of 250$!' +
'\n1. Svetlin Nakov made deposit of 250$!'