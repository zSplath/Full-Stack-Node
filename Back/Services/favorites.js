const { getFavoritesFromDB, getBooksFromDB, saveFavoritesInDB } = require("./database")

function getAllFavorites () {
    return getFavoritesFromDB()
}

function getFavoriteById (id) {
    const favorites = getFavoritesFromDB()
    return favorites.filter(book => book.id === id)[0]
}

function insertFavorite (id) {
    const books = getBooksFromDB()
    const favorites = getFavoritesFromDB()
    
    const newFavorite = books.find( book => book.id === id)

    saveFavoritesInDB([...favorites, newFavorite])

    return newFavorite
}

function updateFavorite (id, changes) {
    const favorites = getFavoritesFromDB()
    const indexChange = favorites.findIndex(book => book.id === id)

    favorites[indexChange] = { ...favorites[indexChange], ...changes}

    saveFavoritesInDB(favorites)

    return favorites[indexChange]
}

function deleteFavoriteById (id) {
    const favorites = getFavoritesFromDB()
    const index = favorites.findIndex(book => book.id === id);

    if (index === -1) return null;

    const [deletedBook] = favorites.splice(index, 1);

    saveFavoritesInDB(favorites)

    return deletedBook
}

module.exports = {
    getAllFavorites,
    getFavoriteById,
    insertFavorite,
    updateFavorite,
    deleteFavoriteById
}