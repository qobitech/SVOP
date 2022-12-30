import React from 'react'
import { Separator } from '../../pages/landing/styled'
import logo from '../../../assets/images/logo.svg'

import {
  Copyright,
  CopyRightContainer,
  CopyrightImage,
  FooterContainer,
  MaxWidthContainer
} from './styled'
import { ORGANIZATION_FULL } from '../../../constants/global'

const Footer = () => {
  return (
    <FooterContainer>
      <MaxWidthContainer>
        <Separator customwidth="100%" customheight={1} />
        <CopyRightContainer>
          <CopyrightImage src={logo} title={ORGANIZATION_FULL} />
          <Separator customwidth={7} />
          <Copyright>&#169; {new Date().getFullYear()}</Copyright>
        </CopyRightContainer>
      </MaxWidthContainer>
    </FooterContainer>
  )
}

export default Footer
