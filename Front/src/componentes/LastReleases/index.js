import styled from 'styled-components'
import { books } from  './ReleasesData'
import { Title } from '../Title'
import Recomendation from '../Recomendation'
import book from '../../imagens/livro2.png'

const LastReleasesContainer = styled.section`
    background-color: #440c5fff;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LastReleases() {
    return (
        <LastReleasesContainer>
            <Title cor='#EB9B00' FontSize="36px"> Últimos Lançamentos </Title>
            <NewBooksContainer>
                {books.map( book => ( <img src={book.src} alt={'Image from '+ book.nome}/>))}
            </NewBooksContainer>
            <Recomendation
                title="Recomendação"
                subtitle="Angular 11"
                description="Todas as diferenças da nova versão do Angular explicadas para você"
                img={book}
            />
        </LastReleasesContainer>
    )
}

export default LastReleases