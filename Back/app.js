const express = require("express")
const app = express()
const cors = require("cors")
const BooksEndpoint = require("./Router/books")
const FavoritesEndpoint = require("./Router/favorites")

const port = 8000
app.listen( port, () => { console.log('\x1b[34m%s\x1b[0m', 'Porta: ' + port) } )

app.use(cors()) 
app.use(express.json())

app.use('/books', BooksEndpoint)
app.use('/favorites', FavoritesEndpoint)