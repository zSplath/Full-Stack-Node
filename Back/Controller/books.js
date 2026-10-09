// const { json } = require("express")
const { getAllBooks, getBookById, insertBook, updateBook, deleteBookById } = require("../Services/books")

const responseErrorInvalidId = "Id inválido"

function getBooks (req, res) {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getBook (req, res) {
    try {
        const id = req.params.id
        if (isNaN(Number(id))) {
            return res.status(422).send({ error: responseErrorInvalidId });
        } 
        const book = getBookById(id)
        res.send(book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postBook (req, res) {
    try {
        const Book = req.body
        if (!Book) {
            return res.status(400).send({ error:'Necessário enviar o body'});
        }
        if (!Book.id) {
            return res.status(400).send({ error:'Campo "id" é obrigatório'});
        }
        if (!Book.nome) {
            return res.status(400).send({ error:'Campo "nome" é obrigatório'});
        }
        insertBook(Book)
        res.status(201)
        res.send(Book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchBook (req, res) {
    try {
        const id = req.params.id
        if (isNaN(Number(id))) {
            return res.status(422).send({ error: responseErrorInvalidId });
        }
        const body = req.body
        const book = updateBook(id, body)
        res.status(200)
        res.send(book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteBook (req, res) {
    try {
        const id = req.params.id
        if (isNaN(Number(id))) {
            return res.status(422).send({ error: responseErrorInvalidId });
        }
        const deletedBook = deleteBookById(id)
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
    getBooks,
    getBook,
    postBook,
    patchBook,
    deleteBook
}