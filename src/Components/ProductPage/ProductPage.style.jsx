import styled from "styled-components";

export const ProductPageStyled = styled.section`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;

img{
    margin-bottom: 2rem;
}

.price{
    padding: .5rem;
    background-color: #91FB5D;
    color: #017E01;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 4px;
}

.description{
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2rem;
    line-height: 1.2;
}
`