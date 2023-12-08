import React from 'react'
import { ContatoStyled } from './Contato.style'
import foto from '../../img/contato.jpg'
import Head from '../Head/Head'

const Contato = () => {
  return (
    <ContatoStyled className='animeLeft'>
        <Head title='Contato' description='Entre em contato'/>
        <img src={foto} alt="maquina de escrever" />
        <div>
            <h1>Entre em contato</h1>
            <ul className='contactInfo'>
                <li>mariano@dtidigital.com.br</li>
                <li>(38) 98853-9207</li>
                <li>Avenida do Contorno - 102</li>
            </ul>
        </div>
    </ContatoStyled>
  )
}

export default Contato