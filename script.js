const myLibrary = [];

function Book(title, author, numberOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
    Book.info = function() {
        return `${title} by ${author} ${numberOfPages} ${readStatus}`;
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}