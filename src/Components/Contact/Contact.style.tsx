
import styled from 'styled-components';


export const ContactsStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    .contactData{
        padding: 0px;
        list-style: none;
    }
    .contactData li{
        font-size: 1.2rem;
        font-family: Arial, Helvetica, sans-serif;
        margin-bottom: .8rem;

    }
    .contactData li::before{
        content: '';
        display: inline-block;
        width: 20px;
        height: 2px;
        background-color: #ddd;
        margin-right: 10px;
    }
`;
