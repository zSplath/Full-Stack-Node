// const { json } = require("express")
const { getAllFavorites, getFavoriteById, insertFavorite, updateFavorite, deleteFavoriteById } = require("../Services/favorites")

const responseErrorInvalidId = "Id inválido"

function getFavorites (req, res) {
    try {
        const books = getAllFavorites()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getFavorite (req, res) {
    try {
        const id = req.params.id
        if (isNaN(Number(id))) {
            return res.status(422).send({ error: responseErrorInvalidId });
        } 
        const book = getFavoriteById(id)
        res.send(book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorite (req, res) {
    try {
        const id = req.params.id
        if (isNaN(Number(id))) {
            return res.status(422).send({ error: responseErrorInvalidId });
        }
        const Book = insertFavorite(id)
        res.status(201)
        res.send(Book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchFavorite (req, res) {
    try {
        const id = req.params.id
        if (isNaN(Number(id))) {
            return res.status(422).send({ error: responseErrorInvalidId });
        }
        const body = req.body
        const book = updateFavorite(id, body)
        res.status(200)
        res.send(book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorite (req, res) {
    try {
        const id = req.params.id
        if (isNaN(Number(id))) {
            return res.status(422).send({ error: responseErrorInvalidId });
        }
        const deletedBook = deleteFavoriteById(id)
        if (!deletedBook)
            res.status(404).end()
        else
            res.send(deletedBook)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavorites,
    getFavorite,
    postFavorite,
    patchFavorite,
    deleteFavorite
}