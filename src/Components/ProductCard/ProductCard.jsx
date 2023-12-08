import React from 'react'
import { ProductCardStyled } from './ProductCard.style'

const ProductCard = ({product}) => {

  return (
    <ProductCardStyled to={`produto/${product.id}`}>
        <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
        <h1 className='productName'>{product.nome}</h1>
    </ProductCardStyled>
  )
}

export default ProductCard