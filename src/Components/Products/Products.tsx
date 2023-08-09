/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import { ProductsStyled } from './Products.style'
import { Product } from '../../Types/Product';



const Products = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  

  async function getProducts():Promise<void> {
    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
    const json = await response.json()
    setProducts(json);
  }

  useEffect( ()=>{
    getProducts()
  },[])
  useEffect( ()=>{
    console.log(products)
  },[products])

  return (
    <ProductsStyled>
        <h1>Produtos</h1>
    </ProductsStyled>
  )
}

export default Products