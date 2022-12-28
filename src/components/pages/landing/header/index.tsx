import React from 'react'
import { Separator } from '../styled'
import {
  HeaderContainer,
  StatsContainer,
  StatsItem,
  Text,
  TextContainer
} from './styled'

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
      <StatsContainer>
        <StatsItem ismr="true">
          TOTAL VOTES&nbsp;&nbsp;&nbsp;
          <span>
            <strong>{totalVotes}</strong>
          </span>
        </StatsItem>
        <Separator customheight={20} customwidth={1} />
        <StatsItem isml="true" ismr="true">
          CATEGORY&nbsp;&nbsp;&nbsp;
          <span>
            <strong>{categories}</strong>
          </span>
        </StatsItem>
        <Separator customheight={20} customwidth={1} />
        <StatsItem isml="true">
          Share&nbsp;&nbsp;&nbsp;
          <span>
            <strong>
              <i className="fas fa-share-alt" />
            </strong>
          </span>
        </StatsItem>
      </StatsContainer>
    </HeaderContainer>
  )
}

export default Header
