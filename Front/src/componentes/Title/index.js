import styled from "styled-components";

export const Title = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: ${props => props.fundo || '#712189ff'};
    color: ${props => props.cor || '#000'};
    font-size: ${props => props.FontSize || '18px'};
    text-align: ${props => props.align || 'center'};
    margin: 0;
`