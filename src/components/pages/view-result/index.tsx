import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import {
  HeaderContainer,
  HeaderText,
  BodyContainer,
  LinkContainer,
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
  BodySectionDouble,
  BodySectionDoubleComponent,
  VoteCountGridSection,
  VoteCountSection,
  CTAVoteSection,
  TotalResultTitleText,
  TotalResultValueText,
  TotalResultValueTextMini,
  CTAApproveButton,
  CTARejectButton,
  CTABtnSection,
  CTAInnerVoteSection
} from './styled'

import { useParams } from 'react-router-dom'
import { pageurl } from '../../../constants/pageurl'

// import profile from '../../../assets/images/user.svg'
// import { userData } from '../../../constants/global';

import { tableRecord } from '../unapproved/mock-data'

const Unapproved = () => {
  return (
        <DataWrapper>
            <UnapprovedChild />
        </DataWrapper>
  )
}

const UnapprovedChild = () => {
  const { id } = useParams()

  const record = tableRecord[0]

  const locationData = {
    State: record.State,
    LGA: record.LocalGovernment,
    Ward: record.Ward,
    'Polling Unit': record.PoolingUnit
  }

  const electionDataLeft = {
    'Vote On Register': record.VotersOnRegister,
    'Accredited Voters': record.AccreditedVoters,
    'Issued Ballot Papers': record.BallotPapersIssuedToPoolingUnit,
    'Unused Ballot Papers': record.TotalUsedBallotPapers
  }

  const electionDataRight = {
    'Spoiled Ballot Papers': record.RejectedBallot,
    'Rejected Ballots': record.RejectedBallot,
    'Total Valid Votes': record.TotalValidVotes,
    'Used Ballot Papers': record.TotalUsedBallotPapers
  }

  return (
        <>
            <HeaderContainer>
                <HeaderText>
                    <LinkContainer to={pageurl.UNAPPROVED}>
                        Unapproved Results
                    </LinkContainer>
                    &nbsp;&nbsp;{' > '}&nbsp;&nbsp;{id}
                </HeaderText>
            </HeaderContainer>
            <BodyContainer>
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
                        <BodySectionDouble>
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
                        </BodySectionDouble>
                        <BodySectionDouble>
                            {Object.keys(electionDataRight).map((i, index) => (
                                <BodySectionRow key={index}>
                                    <BodySectionLeft>
                                        {i}
                                    </BodySectionLeft>
                                    <BodySectionRight>
                                        {Object.values(electionDataRight)[index] || '___'}
                                    </BodySectionRight>
                                </BodySectionRow>
                            ))}
                        </BodySectionDouble>
                    </BodySectionDoubleComponent>
                    <BodySectionHeader>
                        VOTES COUNTED
                    </BodySectionHeader>
                    <BodySectionComponent>
                        <VoteCountGridSection>
                            {record.results?.map((i, index) => (
                                <VoteCountSection key={index}>
                                    <BodySectionLeft>
                                        {i.partyName || '___'}&nbsp;&nbsp;-&nbsp;&nbsp;
                                    </BodySectionLeft>
                                    <BodySectionRight>
                                        {i.Votes || '___'}
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
                    <CTAVoteSection>
                        <CTAInnerVoteSection>
                            <TotalResultTitleText>
                                Total Result&nbsp;&nbsp;&nbsp;
                            </TotalResultTitleText>
                            <TotalResultValueText>
                                3000
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
                    </CTAVoteSection>
                    <BodySectionComponentImage>

                    </BodySectionComponentImage>
                </BodySection>
            </BodyContainer>
        </>
  )
}

export default Unapproved
