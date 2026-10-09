const { getBooksFromDB, saveBooksInDB } = require("./database")

function getAllBooks () {
    return getBooksFromDB()
}

function getBookById (id) {
    const books = getBooksFromDB()
    return books.filter(book => book.id === id)[0]
}

function insertBook (book) {
    const books = getBooksFromDB()

    saveBooksInDB([...books, book])
}

function updateBook (id, changes) {
    const books = getBooksFromDB()
    const indexChange = books.findIndex(book => book.id === id)

    books[indexChange] = { ...books[indexChange], ...changes}

    saveBooksInDB(books)

    return books[indexChange]
}

function deleteBookById (id) {
    const books = getBooksFromDB()
    const index = books.findIndex(book => book.id === id);

    if (index === -1) return null;

    const [deletedBook] = books.splice(index, 1);

    saveBooksInDB(books)

    return deletedBook
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBook,
    deleteBookById
}