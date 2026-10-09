const fs = require("fs")
const dbbooks = 'Database/books.json'
const dbFavoritesBooks = 'Database/favorites.json'

function getBooksFromDB () {
    return JSON.parse(fs.readFileSync(dbbooks))
}

function getFavoritesFromDB () {
    return JSON.parse(fs.readFileSync(dbFavoritesBooks))
}

function saveBooksInDB (books) {
    fs.writeFileSync(dbbooks, JSON.stringify(books, null, 2))
}

function saveFavoritesInDB (favorites) {
    fs.writeFileSync(dbFavoritesBooks, JSON.stringify(favorites, null, 2))
}

module.exports = {
    getBooksFromDB,
    getFavoritesFromDB,
    saveBooksInDB,
    saveFavoritesInDB
}