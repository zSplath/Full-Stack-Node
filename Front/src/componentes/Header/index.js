// import './style.css'
import Logo from '../Logo'
import Menu from '../Menu'
import Icons from '../Icons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
  background-color: rgb(44, 8, 77);
  display: flex;
  color: white;
  justify-content: center;
`

function Header() {
    return (
      <HeaderContainer>
        <Link to='/'>
          <Logo/>
        </Link>
        <Menu/>
        <Icons/>
      </HeaderContainer>
    )
}

export default Header;