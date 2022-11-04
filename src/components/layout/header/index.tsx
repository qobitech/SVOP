import React from 'react'
import logo from '../../../assets/images/logo.svg'
import hamburger from '../../../assets/images/hamburger.svg'

import { HeaderContainer, Logo, Hamburger } from './styled'

interface IHeader {
  setMenu: ()=> void;
}

const Header = ({setMenu}: IHeader) => {
  return (
    <HeaderContainer>
      <Logo src={logo} />
      <Hamburger src={hamburger} onClick={setMenu}/>
    </HeaderContainer>
  )
}

export default Header