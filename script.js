const theHobbit = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pageCount: 295,
    readBook: "not read yet",
    info: function() {
        return this.title + " by " + this.author + ", " + this.pageCount + " pages, " + this.readBook;
    }
};

console.log(theHobbit.info());