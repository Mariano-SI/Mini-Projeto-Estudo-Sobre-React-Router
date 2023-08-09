/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react'
import { ProductsStyled } from './Products.style'
import { Product } from '../../Types/Product';
import ProductCard from '../ProductCard/ProductCard';
import Head from '../Head/Head';



const Products = () => {
  const [products, setProducts] = useState<Array<Product>>([]);
  

  async function getProducts():Promise<void> {
    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
    const json = await response.json();
    setProducts(json);
  }

  useEffect( ()=>{
    getProducts()
  },[])
  useEffect( ()=>{
    console.log(products)
  },[products])

  if(products.length === 0) return null;
  return (
    <ProductsStyled className='leftAnimation'>
      <Head title="Produtos" description="Todos os produtos"/>
        {products.map((product)=>(
          <ProductCard key={product.id} product={product}/>
        ))}
    </ProductsStyled>
  )
}

export default Products