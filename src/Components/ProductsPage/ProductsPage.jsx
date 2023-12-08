import React, { useEffect, useState } from 'react'
import { ProductsPageStyled } from './ProductsPage.style'
import ProductCard from '../ProductCard/ProductCard';
import Head from '../Head/Head';
import ProductsPageSkeleton from './ProductsPageSkeleton';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    async function handleProducts(){
      const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');
      const responseInJson = await response.json();

      setProducts(responseInJson);
      setLoading(false);
    }

    handleProducts()
  },[]);

  function handleContent(){
    if(loading && products.length === 0){
      return(
        <ProductsPageSkeleton/>
      )
    } else if(!loading && products.length > 0){
      return(
        products.map((product)=>(
          <ProductCard product={product} key={product.id}/>
        ))
      )
    }
    return null;
  }
  return (
    <ProductsPageStyled className='animeLeft'>
        <Head title='Produtos' description='Descrção dos produtos' />
        {handleContent()}
    </ProductsPageStyled>
  )
}

export default ProductsPage