import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'
import {
  ContentContainer,
  ContentText,
  VoteSuccessContainer,
  SuccessImage,
  LinkTxt
} from './styled'
import { IStates } from '../../../interface/IReducer'
// import { IActions } from '../../../interface/IAction'

import { Separator } from '../landing/styled'
import { PageTitle } from '../../utils/page-title'

import likeimg from '../../../assets/images/like-icon.svg'
import { pageurl } from '../../../constants/pageurl'

const VoteSuccess: React.FC = () => {
  return (
    <DataWrapper>
      <VoteSuccessChild />
    </DataWrapper>
  )
}

interface IVoteSuccessChild {
  states?: IStates
}

const VoteSuccessChild: React.FC<IVoteSuccessChild> = ({
  states,
  ...props
}) => {
  // const error = ''
  // const load = false

  return (
    <VoteSuccessContainer>
      <ContentContainer>
        <Separator customheight={25} />
        <PageTitle title="SUCCESS!!!" />
        <Separator customheight={15} />
        <ContentText>
          Your Vote Has Been Recorded. Thank you for voting.
        </ContentText>
        <Separator customheight={40} />
        <SuccessImage src={likeimg} />
        <Separator customheight={40} />
        <ContentText>
          Exit or Go Back To{' '}
          <span>
            <LinkTxt href={pageurl.LANDINGPAGE}>HomePage</LinkTxt>
          </span>{' '}
          To Cast More Votes.
        </ContentText>
        <Separator customheight={10} />
      </ContentContainer>
    </VoteSuccessContainer>
  )
}

export default VoteSuccess
