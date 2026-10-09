// import './style.css'
import logo from '../.././imagens/logo.svg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  display: flex;
  font-size: 25px;
  align-items: center;
`

const LogoImage = styled.img`
  margin-right: 10px;
  margin-left: 10px;
`

const Bold = styled.p`font-weight: bold`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo} alt='logo'/>
            <Bold> BooksStore </Bold>
        </LogoContainer>
    )
}

export default Logo;