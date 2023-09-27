const myLibrary = [];

const addBookButton = document.querySelector('.add-btn');
const title = document.getElementById('book-title');
const author = document.getElementById('author-name');
const numberOfPages = document.getElementById('number-of-pages');
const myDialog = document.getElementById('my-dialog')

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

addBookButton.addEventListener('click', () => {
    myDialog.showModal()
})
