import React from 'react'
import { Separator } from '../../pages/landing/styled'

import {
  Copyright,
  CopyRightContainer,
  FooterContainer,
  MaxWidthContainer
} from './styled'

const Footer = () => {
  return (
    <FooterContainer>
      <MaxWidthContainer>
        <Separator customwidth="100%" customheight={1} />
        <CopyRightContainer>
          <Copyright>&#169; {new Date().getFullYear()}</Copyright>
        </CopyRightContainer>
      </MaxWidthContainer>
    </FooterContainer>
  )
}

export default Footer
