import React from 'react'
import { DESCRIPTION, URL } from '../../../../constants/global'
import Share from '../../../utils/share'
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
      <Separator customheight={20} className="d-none d-md-flex" />
      <Separator customheight={0} className="d-flex d-md-none" />
      <TextContainer>
        <Text>{title}</Text>
      </TextContainer>
      <Separator customheight={0} />
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
        <Share
          baseurl={URL}
          description={DESCRIPTION}
          title={'NASELS'}
          url={URL}
        >
          <StatsItem isml="true">
            Share&nbsp;&nbsp;&nbsp;
            <span>
              <strong>
                <i className="fas fa-share-alt" />
              </strong>
            </span>
          </StatsItem>
        </Share>
      </StatsContainer>
    </HeaderContainer>
  )
}

export default Header
