const myLibrary = [];

// user interface
const addBookButton = document.querySelector('.add-btn');
const myDialog = document.getElementById('my-dialog');
const form = document.querySelector('form');

function Book(title, author, numberOfPages, readStatus) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.readStatus = readStatus;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    const mainContent = document.querySelector('.main-content');

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const displayTitle = document.createElement('div');
        displayTitle.textContent = `Title: ${book.title}`;
        card.appendChild(displayTitle);

        const displayAuthor = document.createElement('div');
        displayAuthor.textContent = `Author: ${book.author}`;
        card.appendChild(displayAuthor);

        const displayNumberOfPages = document.createElement('div');
        displayNumberOfPages.textContent = `Pages: ${book.numberOfPages}`;
        card.appendChild(displayNumberOfPages);

        const displayReadStatus = document.createElement('div');
        displayReadStatus.textContent = `Status: ${book.readStatus ? 'Read' : 'Not Read'}`;
        card.appendChild(displayReadStatus);

        const removeCardButton = document.createElement('button');
        removeCardButton.textContent = 'Remove';
        removeCardButton.addEventListener('click', () => {
            // Remove the book from the library array and re-display the books
            myLibrary.splice(index, 1);
            displayBooks();
        });
        card.appendChild(removeCardButton);

        mainContent.appendChild(card);
    });
}

addBookButton.addEventListener('click', () => {
    myDialog.showModal();
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('author-name').value;
    const numberOfPages = document.getElementById('number-of-pages').value;
    const readStatus = document.getElementById('read-status').checked;

    const newBook = new Book(title, author, numberOfPages, readStatus);
    addBookToLibrary(newBook);

    // Clear form fields
    document.getElementById('book-title').value = '';
    document.getElementById('author-name').value = '';
    document.getElementById('number-of-pages').value = '';
    document.getElementById('read-status').checked = false;

    myDialog.close();
    displayBooks();
});

// Initial display of books
displayBooks();
