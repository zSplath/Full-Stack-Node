import { useEffect, useState } from "react"
import { AppContainer } from '../componentes/AppContainer';
import { deleteFavorite, getFavorites } from '../services/favorites';
import styled from "styled-components";
import image from '../imagens/livro.png'

const ContainerResult = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 35px
`

function Favorites() {
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
      fetchFavorites()
  }, [])

  async function fetchFavorites() {
      const favoritesFromAPI = await getFavorites()
      setFavorites(favoritesFromAPI)
  }

  async function removeFavorite(favorite) {
      const confirmed = window.confirm(`Deseja remover "${favorite.nome}" dos Favoritos?`)
      if (!confirmed) return

      await deleteFavorite(favorite.id)
      fetchFavorites()
  }

  return (
    <AppContainer>
     <div>
       <Title>Seus Favoritos</Title>
       <ContainerResult>
         {
           favorites.length !== 0 ? favorites.map(favorite => (
             <Result onClick={() => removeFavorite(favorite)}>
               <p>{favorite.nome}</p>
               <img src={image} alt="book"/>
             </Result>
           )) : null
         }
       </ContainerResult>
     </div>
    </AppContainer>
  );
}

export default Favorites;