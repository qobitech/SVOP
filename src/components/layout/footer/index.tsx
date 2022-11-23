import React from 'react'
import eu from '../../../assets/images/eu_logo.png'
import dai from '../../../assets/images/dai_logo.png'

import {
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
      <div><p>Copyright 2022</p></div>
      <LinkContainer to={pageurl.OVERVIEW}>
        <Logo src={eu} />
        <Logo src={dai} />
      </LinkContainer>
    </FooterContainer>
  )
}

export default Footer
