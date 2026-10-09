import Input from "../Input"
import styled from "styled-components"
import { useEffect, useState } from "react"
// import { books } from "./SearchData"
import { getBooks } from "../../services/books"
import image from '../../imagens/livro.png'
import { postFavorite } from "../../services/favorites"

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #54187aff 35%, #573a10ff 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: auto;
    width: 100%;
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search () {
    const [BookSearch, setBookSearch] = useState([])
    const [books, setBook] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const bookFromAPI = await getBooks()
        setBook(bookFromAPI)
    }

    async function addFavorite(id) {
        const favorite = await postFavorite(id)
        alert(`Livro ${favorite.nome} adicionado aos Favoritos`)
    }
    
    return (
        <SearchContainer>
            <Title> Já escolheu seu livro? </Title>
            <Subtitle> Pesquise aqui mesmo! </Subtitle>
            <Input 
                placeholder="Digite o nome do livro"
                onChange= { event => setBookSearch(books.filter( book => book.nome.toLowerCase().includes(event.target.value.toLowerCase())))}
                // onBlur= { event => setBookSearch(event.target.value)}
                // onKeyDown= { event => { if (event.key === 'Enter') setBookSearch(event.target.value) } }
            />
            <div>
            {BookSearch.map( book => (
                <Result onClick={() => addFavorite(book.id)}>
                    <img src={image} alt='book'></img>
                    <p>{book.nome}</p>
                </Result>
            ))}
            </div>
        </SearchContainer>
    )
}

export default Search