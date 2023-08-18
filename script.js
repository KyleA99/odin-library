const myLibrary = [];

// Static example book.
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");

/**
 * Constructor function that represents a book.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 * @param {number} pageCount - The number of pages in the book.
 * @param {string} bookRead - The status of whether the book has been read or not.
 */
function Book(title, author, pageCount, bookRead) {
    this.title = title
    this.author = author
    this.pageCount = pageCount
    this.bookRead = bookRead
}

/**
 * Adds a new book to the myLibrary array.
 */
function addBookToLibrary() {
    myLibrary.push(book1);
}
addBookToLibrary();
console.log(myLibrary);