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
      <AboutBodyContainer>
        <AboutBody>{description}</AboutBody>
      </AboutBodyContainer>
      <Separator customheight={20} />
      <Separator customwidth="100%" customheight={1} />
    </AboutContainer>
  )
}

export default About
