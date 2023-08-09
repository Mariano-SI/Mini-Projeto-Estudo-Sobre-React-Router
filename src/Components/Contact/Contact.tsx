import React from 'react'
import { ContactsStyled } from './Contact.style'
import contactPhoto from '../../assets/img/contato.jpg'
import Head from '../Head/Head'



const Contact = () => {
  return (
    <ContactsStyled className="leftAnimation">
      <Head title='Contato' description='Entre em contato'/>
      <img src={contactPhoto} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
      <ul className='contactData'>
        <li>mariano.silva@ufvjm.edu.br</li>
        <li>99999-9999</li>
        <li>Rua Ali Perto, 999</li>
      </ul>
      </div>
    </ContactsStyled>
  )
}

export default Contact