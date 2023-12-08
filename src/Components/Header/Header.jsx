import React from 'react'
import { HeaderStyled } from './Header.style'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <HeaderStyled>
        <ul>
            <li><NavLink className='link' to='/' end>Produtos</NavLink></li>
            <li><NavLink className='link' to='contato'>Contato</NavLink></li>
        </ul>
    </HeaderStyled>
  )
}

export default Header