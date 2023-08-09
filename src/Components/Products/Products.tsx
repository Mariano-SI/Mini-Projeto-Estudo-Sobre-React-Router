import React from 'react'
import { ProductsStyled } from './Products.style'

interface IProducts{}

const Products = (props: IProducts) => {
    console.log(props)
  return (
    <ProductsStyled>
        <h1>Produtos</h1>
    </ProductsStyled>
  )
}

export default Products