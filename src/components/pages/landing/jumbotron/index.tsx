import React from 'react'
import { JumbotronContainer } from './styled'
import jumbotronImg from '../../../../assets/images/jumbotron.svg'

interface IJumboTron {
  cta?: string
  ctaLink?: string
}

const Jumbotron: React.FC<IJumboTron> = () => {
  return <JumbotronContainer imgsrc={jumbotronImg} />
}

export default Jumbotron
