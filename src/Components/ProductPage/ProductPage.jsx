import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ProductPageStyled } from './ProductPage.style';
import Head from '../Head/Head';
import ProductContentSkeleton from '../ProductContentSkeleton/ProductContentSkeleton';

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const {id} = useParams();
    
    useEffect(()=>{
        async function fetchProduct(url){
            try {
                const response = await fetch(url);
                const productInJson = await response.json();
                setProduct(productInJson);
            } catch (error) {
                setErro('Um erro ocorreu');
            }finally{
                setLoading(false);
            }
        }

        fetchProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
    },[id]);

  function handleContent(){
    if(erro){
        return <p>Erro</p>
    }
    if(product === null && loading){
        return(
            <ProductContentSkeleton/>
        )
    }else if(product && !loading){
        return (
                <>
                <Head title={product.nome} description={`Esse é um ${product.nome}`} />
                <div>
                    {product.fotos.map((foto)=>(
                        <img src={foto.src} alt={foto.titulo} key={foto.src}/>
                    ))}
                </div>
                <div>
                    <h1>{product.nome}</h1>
                    <span className='price'>R$ {product.preco}</span>
                    <p className='description'>{product.descricao}</p>
                </div>
                </>
        )
    }
  }  
  return (
    <ProductPageStyled className='animeLeft'>
        {handleContent()}
    </ProductPageStyled>
  )
}

export default ProductPage