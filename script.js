const myLibrary = [];
const bookCardContainer = document.getElementById("book-card-container");

/**
 * Constructor function that represents a book.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} pageCount - The number of pages in the book.
 * @param {string} bookRead - The status of whether the book has been read or not.
 */
function Book(title, author, pageCount, bookRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.bookRead = bookRead;
}

const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Have not read yet");
const book2 = new Book("The Alchemist", "Paulo Coelho", 163, "Have read/completed");

/**
 * Adds a book to the library.
 * @param {Object} book - The book object to be added to the library.
 */
function addBookToLibrary(book) {
    myLibrary.push(book);
}
addBookToLibrary(book1);
addBookToLibrary(book2);
console.log(myLibrary);

/**
 * Creates a book card and appends it to the book card container.
 * @param {Object} book - The book object for which a card is to be created.
 */
function createBookCard(book) {
    const bookCard = document.createElement("p");
    bookCard.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pageCount}, Read Status: ${book.bookRead}`;
    bookCardContainer.appendChild(bookCard);
}

// Passes createBookCard() as callback and executes function for each book in myLibrary.
myLibrary.forEach(createBookCard);