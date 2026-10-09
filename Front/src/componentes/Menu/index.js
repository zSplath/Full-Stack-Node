// import './style.css'
import styled from "styled-components";
import { Link } from "react-router-dom";

const Option = styled.li`
font-size: 16px;
min-width: 120px;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
height: 100%;
padding: 0 5px;
cursor: pointer;
`

const MenuContainer = styled.ul`
  display: flex;
`

const opcoesMenu = ['Categorias','Estante','Favoritos']

function Menu() {
    return (
        <MenuContainer>
          { opcoesMenu.map( (text) => (
            <Link to={`/${text.toLowerCase()}`}>
              <Option className='opc'>
                <p>{text}</p>
              </Option>
            </Link>
          ))}
        </MenuContainer>
    )
}

export default Menu;