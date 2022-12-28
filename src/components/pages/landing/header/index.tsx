import React from 'react'
import { HeaderContainer, Text, TextContainer } from './styled'

interface IHeader {
  title: string
  totalVotes: number
  categories: number
  shareLinks: any
}

const Header: React.FC<IHeader> = ({
  categories,
  shareLinks,
  title,
  totalVotes
}) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <Text>{title}</Text>
      </TextContainer>
    </HeaderContainer>
  )
}

export default Header
