import React from 'react'
import { pageurl } from '../../../../constants/pageurl'
import { Separator } from '../styled'
import {
  AboutContainer,
  AboutBody,
  AboutHeader,
  AboutBodyContainer,
  Sponsorship
} from './styled'

interface IAbout {
  description: string
}

const About: React.FC<IAbout> = ({ description }) => {
  return (
    <AboutContainer id="about">
      <Separator customheight={40} />
      <AboutHeader>ABOUT</AboutHeader>
      <Separator customheight={5} className="d-none d-md-flex" />
      <Separator customheight={0} className="d-flex d-md-none" />
      <AboutBodyContainer>
        <AboutBody dangerouslySetInnerHTML={{ __html: description }} />
      </AboutBodyContainer>
      <Separator customheight={10} />
      <Sponsorship>
        Would you like to sponsor this event ? &nbsp;&nbsp;
        <span>
          <a href={pageurl.SPONSORSHIP}>Click here</a>
        </span>
      </Sponsorship>
      <Separator customheight={30} />
      <Separator customwidth="100%" customheight={1} />
      <Separator customheight={40} />
    </AboutContainer>
  )
}

export default About
