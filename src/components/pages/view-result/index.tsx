import React, { useEffect } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import queryString from 'query-string'

import {
  HeaderContainer,
  BodyContainer,
  BodySection,
  BodySectionHeader,
  BodySectionComponent,
  // BodySectionProfile,
  // ProfileImage,
  // BodySectionProfileName,
  BodySectionComponentImage,
  // BodySectionProfileRole,
  // BodySectionProfileDate,
  // BodyProfileNameRoleSection,
  // MobileBodySectionProfileDate,
  BodySectionRow,
  BodySectionLeft,
  BodySectionRight,
  BodySectionDoubleComponent,
  VoteCountGridSection,
  VoteCountSection,
  CTAApproveButton,
  CTARejectButton,
  BodySectionComponentImageTag,
  BodyContainerRow
} from './styled'

import { useParams, useLocation } from 'react-router-dom'
import { pageurl } from '../../../constants/pageurl'
import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'
import BreadCrumb from '../../utils/bread-crumb'
import { HeaderBodyText } from '../unapproved/styled'
import { resultType } from '../../../store/types'

const Unapproved = () => {
  return (
        <DataWrapper>
            <UnapprovedChild />
        </DataWrapper>
  )
}

interface IUnapprovedPageChild {
  states?: IStates
}

const UnapprovedChild: React.FC<IUnapprovedPageChild> = ({
  states,
  ...props
}) => {
  const {
    getResultByIdAction,
    clearAction
  } = props as unknown as IActions

  const { id } = useParams()

  useEffect(() => {
    getResultByIdAction(id || '')
  }, [])

  useEffect(() => {
    return () => {
      clearAction(resultType.getById)
    }
  }, [])

  const data = states?.result.getResultById
  const load = states?.result.getResultById_Loading

  const locationData = {
    State: data?.state,
    LGA: data?.localGovernment,
    Ward: data?.ward,
    'Polling Unit': data?.poolingUnit
  }

  const electionDataLeft = {
    'Vote On Register': data?.votersOnRegister,
    'Accredited Voters': data?.accreditedVoters,
    'Issued Ballot Papers': data?.ballotPapersIssuedToPoolingUnit,
    'Unused Ballot Papers': data?.totalUsedBallotPapers,
    'Spoiled Ballot Papers': data?.rejectedBallot,
    'Rejected Ballots': data?.rejectedBallot,
    'Total Valid Votes': data?.totalValidVotes,
    'Used Ballot Papers': data?.unusedBallotPapers
  }

  const location = useLocation()

  const { search } = location
  const values = queryString.parse(search)

  const { p } = values || {}

  return (
        <>
            <BreadCrumb
                crumbs={[
                  {
                    title: 'Unapproved Results',
                    url: pageurl.UNAPPROVED + '?p=' + p
                  },
                  {
                    title: data?.election || '___',
                    url: pageurl.UNAPPROVED
                  }
                ]}
            />
            <BodyContainer>
                <BodyContainerRow>
                    <HeaderContainer>
                        <HeaderBodyText>
                            {data?.election || ''}
                        </HeaderBodyText>
                        {load && <i className="fa fa-spinner fa-spin mx-3" aria-hidden="true"></i>}
                        <CTAApproveButton>
                            Approve
                        </CTAApproveButton>
                        <CTARejectButton>
                            Reject
                        </CTARejectButton>
                    </HeaderContainer>
                </BodyContainerRow>
                <BodyContainer nopadding='true' >
                    <BodySection width='40%'>
                        <BodySectionHeader>
                            LOCATION DATA
                        </BodySectionHeader>
                        <BodySectionComponent>
                                {Object.keys(locationData).map((i, index) => (
                                    <BodySectionRow key={index}>
                                        <BodySectionLeft>
                                            {i}
                                        </BodySectionLeft>
                                        <BodySectionRight>
                                            {Object.values(locationData)[index] || '___'}
                                        </BodySectionRight>
                                    </BodySectionRow>
                                ))}
                        </BodySectionComponent>
                        <BodySectionHeader>
                            ELECTION DATA
                        </BodySectionHeader>
                        <BodySectionDoubleComponent>
                            {/* <BodySectionDouble> */}
                                {Object.keys(electionDataLeft).map((i, index) => (
                                    <BodySectionRow key={index}>
                                        <BodySectionLeft>
                                            {i}
                                        </BodySectionLeft>
                                        <BodySectionRight>
                                            {Object.values(electionDataLeft)[index] || '___'}
                                        </BodySectionRight>
                                    </BodySectionRow>
                                ))}
                        </BodySectionDoubleComponent>
                        <BodySectionHeader>
                            VOTES COUNTED
                        </BodySectionHeader>
                        <BodySectionComponent>
                            <VoteCountGridSection>
                                {data?.results?.map((i, index) => (
                                    <VoteCountSection key={index}>
                                        <BodySectionLeft>
                                            {i.partyName || '___'}&nbsp;&nbsp;-&nbsp;&nbsp;
                                        </BodySectionLeft>
                                        <BodySectionRight>
                                            {i.votes || '___'}
                                        </BodySectionRight>
                                    </VoteCountSection>
                                ))}
                            </VoteCountGridSection>
                        </BodySectionComponent>
                    </BodySection>
                    <BodySection width='58%'>
                        {/* <BodySectionProfile>
                            <ProfileImage src={userData.user?.profileUrl || profile} />
                            <BodyProfileNameRoleSection>
                                <BodySectionProfileName>
                                    {userData.user?.firstName + ' ' + userData.user?.lastName}
                                </BodySectionProfileName>
                                <BodySectionProfileRole>
                                    {userData.token?.role}
                                </BodySectionProfileRole>
                                <MobileBodySectionProfileDate>
                                    28th September, 2022
                                </MobileBodySectionProfileDate>
                            </BodyProfileNameRoleSection>
                            <BodySectionProfileDate>
                                28th September, 2022
                            </BodySectionProfileDate>
                        </BodySectionProfile> */}
                        {/* <CTAVoteSection>
                            <CTAInnerVoteSection>
                                <TotalResultTitleText>
                                    Total Result&nbsp;&nbsp;&nbsp;
                                </TotalResultTitleText>
                                <TotalResultValueText>
                                    {data?.results.length || '0'}
                                </TotalResultValueText>
                                <TotalResultValueTextMini>
                                    votes
                                </TotalResultValueTextMini>
                            </CTAInnerVoteSection>
                            <CTABtnSection>
                                <CTAApproveButton>
                                    Approve
                                </CTAApproveButton>
                                <CTARejectButton>
                                    Reject
                                </CTARejectButton>
                            </CTABtnSection>
                        </CTAVoteSection> */}
                        <BodySectionComponentImage>
                            <BodySectionComponentImageTag src={data?.documentUrl}/>
                        </BodySectionComponentImage>
                    </BodySection>
                </BodyContainer>
            </BodyContainer>
        </>
  )
}

export default Unapproved
