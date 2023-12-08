import styled from "styled-components";

export const ContatoStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    .contactInfo{
        padding: 0;
        list-style: none;
    }

    .contactInfo li{
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: .8rem;
    }

    .contactInfo li::before{
        content: '';
        display: inline-block;
        width: 20px;
        height: 2px;
        background: #84E;
        margin-right: 10px;
    }

`