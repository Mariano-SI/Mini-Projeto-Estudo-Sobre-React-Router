
import styled from 'styled-components';


export const ProductStyled = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    .productImages{
        margin-bottom: 2rem;
    }
    .preco{
        display: inline-block;
        padding: .5rem;
        background-color: #91FB5D;
        color: #017E01;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 4px;
    }

    .descricao{
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        line-height: 1.2;
    }
`;
