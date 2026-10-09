// import './style.css'
import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icon = styled.li`
  margin-right: 40px;
  width: 25px;
`

const IconsContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`

const icons = [perfil,sacola]

function Icons() {
    return (
        <IconsContainer>
          { icons.map( (icon) => (
            <Icon>
              <img src={icon} alt='icone'></img>
            </Icon>
          ))}
        </IconsContainer>
    )
}

export default Icons;