class LibraryCollection {
    books = [];
    constructor(capacity) {
        this.capacity = capacity;
    }

    addBook (bookName, bookAuthor){
        if (this.books.length < this.capacity){

            this.books.push({bookName,bookAuthor,payed: false});
            return `The ${bookName}, with an author ${bookAuthor}, collect.`

        }else {
            throw new Error("Not enough space in the collection.");
        }
    }

    payBook(bookName){
        const book = this.books.find(b => b.bookName === bookName);

        if (!book){
            throw new Error(`${bookName} is not in the collection.`);
        }

        if (book.payed){
            throw new Error(`${bookName} has already been paid.`);
        }

        book.payed = true;
        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName){
        const book = this.books.find(b => b.bookName === bookName);

        if (!book){
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (!book.payed){
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        this.books = this.books.filter(b => b.bookName !== bookName);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor){

        if (bookAuthor){

            if (!this.books.some( b=> b.bookAuthor === bookAuthor)){
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            const libInfoByAuthor = [];
            const filtered = this.books.filter(book => book.bookAuthor === bookAuthor);

            filtered.forEach(b => libInfoByAuthor.push(`${b.bookName} == ${b.bookAuthor} - ${b.payed ? 'Has Paid' : 'Not Paid'}.`));

            return libInfoByAuthor.join('\n');

        }else {

            const libInfo = [];
            const emptySlots = this.capacity - this.books.length;
            libInfo.push(`The book collection has ${emptySlots} empty spots left.`);

            this.books.sort((b1,b2)=> b1.bookName.localeCompare(b2.bookName));

            this.books.forEach(book =>
                libInfo.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? 'Has Paid' : 'Not Paid' }.`));

            return libInfo.join('\n');
        }
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());
