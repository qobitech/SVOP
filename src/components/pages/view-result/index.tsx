import React, { useEffect, useState } from 'react'
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
  BodyContainerRow,
  BodyCTASection,
  BodyCTASectionComponent,
  HeaderBodyText
} from './styled'

import { useParams, useLocation } from 'react-router-dom'
import { pageurl } from '../../../constants/pageurl'
import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'
import BreadCrumb from '../../utils/bread-crumb'
import { resultType } from '../../../store/types'
import ResultAssessmentOTP from './otp'
import { HeaderTextNumbers } from '../approved/styled'

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
    clearAction,
    approveResultAction,
    rejectResultAction
  } = props as unknown as IActions

  const { id, page } = useParams()

  useEffect(() => {
    getResultByIdAction(id || '')
  }, [])

  const getPageParam = (() => {
    if (page === 'approved') {
      return { text: 'Approved Results', url: pageurl.APPROVED, isApproved: true }
    } else if (page === 'unapproved') {
      return { text: 'Unapproved Results', url: pageurl.UNAPPROVED, isApproved: false }
    } else {
      return { text: '', url: '', isApproved: false }
    }
  })()

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

  const [openModal, setOpenModal] = useState(false)
  const [isApprove, setIsApprove] = useState(false)

  return (
        <>
            <BreadCrumb
                crumbs={[
                  {
                    title: getPageParam.text || '',
                    url: getPageParam.url + '?p=' + p
                  },
                  {
                    title: data?.election || '',
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
                        {load
                          ? <i className="fa fa-spinner fa-spin" aria-hidden="true"></i>
                          : data &&
                            <>{!getPageParam.isApproved
                              ? <>
                                    <CTAApproveButton onClick={() => {
                                      setOpenModal(true)
                                      setIsApprove(true)
                                    }}>
                                        Approve
                                    </CTAApproveButton>
                                    <CTARejectButton onClick={() => {
                                      setOpenModal(true)
                                      setIsApprove(false)
                                    }}>
                                        Reject
                                    </CTARejectButton>
                                </>
                              : <HeaderTextNumbers>Approved<span><i className='fas fa-check-circle ml-2' /></span></HeaderTextNumbers>}
                            </>
                        }
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
                        <BodySectionComponent noborder='true'>
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
                        <BodyCTASection>
                          <BodyCTASectionComponent className='mx-2'>
                            <i className='fas fa-share' />&nbsp;Share
                          </BodyCTASectionComponent>
                          <BodyCTASectionComponent className='mx-2'>
                            <i className='fas fa-download' />&nbsp;Download
                          </BodyCTASectionComponent>
                        </BodyCTASection>
                    </BodySection>
                </BodyContainer>
            </BodyContainer>
            <ResultAssessmentOTP
                approveResultAction={approveResultAction}
                rejectResultAction={rejectResultAction}
                clearAction={clearAction}
                isApprove={isApprove}
                openModal={openModal}
                setOpenModal={setOpenModal}
                states={states}
            />
        </>
  )
}

export default Unapproved
