import React from 'react'
import { Separator } from '../styled'
import {
  AboutContainer,
  AboutBody,
  AboutHeader,
  AboutBodyContainer
} from './styled'

interface IAbout {
  description: string
}

const About: React.FC<IAbout> = ({ description }) => {
  return (
    <AboutContainer>
      <Separator customheight={40} />
      <AboutHeader>ABOUT</AboutHeader>
      <Separator customheight={5} className="d-none d-md-flex" />
      <Separator customheight={0} className="d-flex d-md-none" />
      <AboutBodyContainer>
        <AboutBody>{description}</AboutBody>
      </AboutBodyContainer>
      <Separator customheight={30} />
      <Separator customwidth="100%" customheight={1} />
      <Separator customheight={40} />
    </AboutContainer>
  )
}

export default About
