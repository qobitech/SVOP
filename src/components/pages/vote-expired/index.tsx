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

import likeimg from '../../../assets/images/thankyou.svg'
import { pageurl } from '../../../constants/pageurl'
import { SHOWRESULTPAGE, userData } from '../../../constants/global'

const VoteExpired: React.FC = () => {
  return (
    <DataWrapper>
      <VoteExpiredChild />
    </DataWrapper>
  )
}

interface IVoteExpiredChild {
  states?: IStates
}

const VoteExpiredChild: React.FC<IVoteExpiredChild> = ({
  states,
  ...props
}) => {
  // const error = ''
  // const load = false

  return (
    <VoteSuccessContainer>
      <ContentContainer>
        <Separator customheight={25} />
        <PageTitle title="VOTE ENDED!!!" />
        <Separator customheight={15} />
        <ContentText>
          Voting Has Ended. Thank you for participating.
        </ContentText>
        <Separator customheight={40} />
        <SuccessImage
          src={likeimg}
          alt={`<a href="https://www.freepik.com/free-vector/abstract-halftone-design-background-use-modern-design-cover-poster-template-brochure-decorated-flyer-banner_26988113.htm#page=2&query=grateful&position=1&from_view=search&track=sph">Image by Rochak Shukla</a> on Freepik`}
        />
        <Separator customheight={40} />
        <ContentText>
          <span>
            <LinkTxt href={pageurl.LANDINGPAGE}>Exit</LinkTxt>
          </span>{' '}
          {SHOWRESULTPAGE && (
            <span>
              or{' '}
              <LinkTxt href={pageurl.RESULTS + `/${userData._doc._id}`}>
                View Results
              </LinkTxt>
            </span>
          )}{' '}
          or Sponsor the Upcoming Dinner Celebrations{' '}
          <span>
            <LinkTxt href={pageurl.SPONSORSHIP}>Here</LinkTxt>
          </span>
          .
        </ContentText>
        <Separator customheight={10} />
      </ContentContainer>
    </VoteSuccessContainer>
  )
}

export default VoteExpired
