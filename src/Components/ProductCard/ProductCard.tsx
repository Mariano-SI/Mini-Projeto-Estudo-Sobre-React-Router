import React from 'react'
import { Product } from '../../Types/Product'
import { Link } from 'react-router-dom';

interface IProductCard{
    product: Product;
}

const ProductCard = ({product}: IProductCard) => {

  return (
    <Link to={`produto/${product.id}`}>
        <img src={product.fotos[0].src} alt={product.fotos[0].titulo} />
        <h1 style={{margin:'0.5rem 0'}}>{product.nome}</h1>
    </Link>
  )
}

export default ProductCard;