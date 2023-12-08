
import styled from 'styled-components';


export const HeaderStyled = styled.nav`
    margin-bottom: 2rem;

    ul{
        display: flex;
        padding: 0px;
        margin: 0;
        list-style: none;
    }
    li{
        margin-right: 1rem;
    }
    .navbarLink{
        display: block;
        text-decoration: none;
        padding: .5rem 1rem;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        color: black;
        background-color: #eee;
        border-radius: 4px;
    }
    .navbarLink:hover{
        background-color: #ddd;
        cursor: pointer;
    }
    .navbarLink.active{
        
    }
`;
