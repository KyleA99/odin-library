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
 * Pushes books to myLibrary.
 */
function addBookToLibrary(book) {
    myLibrary.push(book);
}
addBookToLibrary(book1);
addBookToLibrary(book2);
console.log(myLibrary);

// Loops through myLibrary and creates a new paragraph for each array item, with object properties displayed.
myLibrary.forEach(function(book) {
    const bookCard = document.createElement("p");
    bookCard.textContent = `Title: ${book.title}, Author: ${book.author}, Pages: ${book.pageCount}, Read Status: ${book.bookRead}`;
    bookCardContainer.appendChild(bookCard);
});