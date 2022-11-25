import React from 'react'
import dai from '../../../assets/images/logo.svg'

import {
  Copyright,
  FooterContainer,
  Logo
} from './styled'

import {
  LinkContainer
} from '../../utils/reusable/styled'
import { pageurl } from '../../../constants/pageurl'

const Footer = () => {
  return (
    <FooterContainer>
      <div><Copyright>Copyright &#169; 2022</Copyright></div>
      <LinkContainer to={pageurl.OVERVIEW}>
        <Logo src={dai} />
      </LinkContainer>
    </FooterContainer>
  )
}

export default Footer
