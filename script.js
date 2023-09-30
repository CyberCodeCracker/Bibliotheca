const myLibrary = [];

// User interface elements
const addBookButton = document.querySelector('.add-btn');
const myDialog = document.getElementById('my-dialog');
const form = document.querySelector('form');
const cardContainer = document.querySelector('.card-container');
const overlay = document.getElementById('overlay');

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
    const bookCards = document.querySelectorAll('.card');
    bookCards.forEach(card => {
        card.remove();
    });

    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const displayTitle = document.createElement('div');
        displayTitle.textContent = `Title: ${book.title}`;
        displayTitle.classList.add('title')
        card.appendChild(displayTitle);

        const displayAuthor = document.createElement('div');
        displayAuthor.classList.add('author')
        displayAuthor.textContent = `Author: ${book.author}`;
        card.appendChild(displayAuthor);

        const displayNumberOfPages = document.createElement('div');
        displayNumberOfPages.classList.add('number')
        displayNumberOfPages.textContent = `Pages: ${book.numberOfPages}`;
        card.appendChild(displayNumberOfPages);

        const displayReadStatus = document.createElement('div');
        displayReadStatus.classList.add('status')
        displayReadStatus.textContent = `${book.readStatus ? 'Read' : 'Not Read'}`;
        card.appendChild(displayReadStatus);

        const removeCardButton = document.createElement('button');
        removeCardButton.textContent = 'Remove';
        removeCardButton.classList.add('remove-btn');
        removeCardButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });
        card.appendChild(removeCardButton);

        cardContainer.appendChild(card);
    });
}

addBookButton.addEventListener('click', () => {
    overlay.style.display = 'block';
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

    document.getElementById('book-title').value = '';
    document.getElementById('author-name').value = '';
    document.getElementById('number-of-pages').value = '';
    document.getElementById('read-status').checked = false;

    myDialog.close();
    overlay.style.display = 'none';
    displayBooks();
});

displayBooks();
