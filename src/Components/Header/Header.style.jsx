import styled from "styled-components";

export const HeaderStyled = styled.nav`

    margin-bottom: 2rem;

    ul{
        display: flex;
        padding: 0px;
        margin: 0px;
        list-style: none;
    }

    li{
        margin-right: 1rem;
    }

    .link{
        display: block;
        text-decoration: none;
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        color: black;
        background-color: #eee;
        padding: .5rem 1rem;
        border-radius: 4px;
    }

    .link:hover{
        background: #DDD;
    }

    .link.active{
        border-bottom: 3px solid #84E;
    }

`