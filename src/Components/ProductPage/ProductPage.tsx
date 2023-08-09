import React, {useEffect, useState} from 'react'
import { ProductStyled } from './ProductPage.style'
import { useParams } from 'react-router-dom'
import { Product } from '../../Types/Product'
import Head from '../Head/Head'



const ProductPage = ():JSX.Element => {
    const [productData, setProductData] = useState<Product|null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string| null>(null);
    const {id} = useParams();

    async function getProduct(): Promise<void>{
        setLoading(true);
        try {
            const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
            const json = await response.json();
            setProductData(json)
        } catch (error) {
            setError('Um erro ocorreu');
        }finally{
            setLoading(false);
        }
    }

    useEffect(()=>{
        getProduct();
    },[])
    
    function decideContent(){
        if(loading) return <p>Carregando...</p>
        if(error) return <p>{error}</p>
        if(productData === null) return null;
        return(
            <section className='productDiv leftAnimation'>
                <Head title={productData.nome} description={productData.descricao}/>
                {productData.fotos.map((photo)=>(
                    <img key={photo.src} src={photo.src} alt={photo.titulo} />
                ))}
                <div>
                    <h1>{productData.nome}</h1>
                    <span className='preco'>R$ {productData.preco}</span>
                    <p className='descricao'>{productData.descricao}</p>
                </div>
            </section>
        )
    }
    return(
        <ProductStyled>
           {decideContent()}
        </ProductStyled>
    )
}

export default ProductPage;