import React, { useEffect } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import 'react-toastify/dist/ReactToastify.css'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'

import {
  BodyContainer,
  BodyContainerRow,
  HeaderContainer
} from '../view-result/styled'
import {
  BodyColumnLeft, BodyColumnRight, OverViewSection,
  OverViewSectionColumns, OverViewSectionColumnsBodyText,
  OverViewSectionColumnsHeaderText, LinkContainer, LoggedUserSection,
  LoggedUserSectionRow, LoggedUserSectionRowBodyText, LoggedUserSectionRowHeaderText,
  MapViewSection, MapViewImage, AboutSectionRow, AboutSectionColumn, CTAApproveButton
} from './styled'

import homeicon from '../../../assets/images/home.png'

import { pageurl } from '../../../constants/pageurl'

import mapimage from '../../../assets/images/upload-doc.jpg'
import { _handleTh } from '../../utils/helper'
import { HeaderImage } from '../../utils/bread-crumb/styled'

import { userData } from '../../../constants/global'
import { HeaderBodyText } from '../approved/styled'

const PAGE_SIZE = 20

const Overview: React.FC = () => {
  return (
        <DataWrapper>
            <OverviewChild />
        </DataWrapper>
  )
}

interface IOverviewPageChild {
  states?: IStates
}

const OverviewChild: React.FC<IOverviewPageChild> = ({
  states,
  ...props
}) => {
  const {
    getUnapprovedResultsAction,
    getApprovedResultsAction
  } = props as unknown as IActions

  useEffect(() => {
    getUnapprovedResultsAction(PAGE_SIZE, 1)
    getApprovedResultsAction(PAGE_SIZE, 1)
  }, [])

  const approvedData = states?.result.getAllApprovedResults
  const unapprovedData = states?.result.getAllUnApprovedResults
  const approvedDataload = states?.result?.getAllApprovedResults_Loading
  const unapprovedDataload = states?.result?.getAllUnApprovedResults_Loading

  const overviewSectionData = [
    {
      title: 'Un-approved Results',
      value: unapprovedData?.total || 0,
      url: pageurl.UNAPPROVED,
      load: unapprovedDataload
    },
    {
      title: 'Approved Results',
      value: approvedData?.total || 1,
      url: pageurl.APPROVED,
      load: approvedDataload
    },
    {
      title: 'Rejected Results',
      value: 0,
      url: pageurl.APPROVED,
      load: false
    }
  ]

  const usersectiondata = [
    {
      title: 'Full Name',
      value: userData?.user?.firstName + ' ' + userData?.user?.lastName
    },
    {
      title: 'Email',
      value: userData?.token?.email
    },
    {
      title: 'Phone',
      value: userData?.user?.mobile
    },
    {
      title: 'Role',
      value: userData?.token?.role
    },
    {
      title: 'User Name',
      value: userData?.token?.unique_name[0]
    }
  ]

  return (
    <>
      <HeaderContainer>
        <HeaderImage src={homeicon} />
      </HeaderContainer>
      <BodyContainer>
        <BodyContainerRow>
          <HeaderBodyText>
            Elections Results App
          </HeaderBodyText>
        </BodyContainerRow>
        <BodyContainer nopadding='true'>
          <BodyColumnLeft>
            <OverViewSection>
              {overviewSectionData.map((i, index) => (
                <OverViewSectionColumns key={index} noborder={index === (overviewSectionData.length - 1) ? 'true' : 'false'} >
                  <OverViewSectionColumnsHeaderText>
                    {i.title}
                  </OverViewSectionColumnsHeaderText>
                  <OverViewSectionColumnsBodyText>
                    {i.load
                      ? <i className="fa fa-spinner fa-spin" aria-hidden="true" />
                      : <LinkContainer to={i.url}>
                      {_handleTh(i?.value?.toString())}
                    </LinkContainer>}
                  </OverViewSectionColumnsBodyText>
                </OverViewSectionColumns>
              ))}
            </OverViewSection>
            <MapViewSection>
              <MapViewImage src={mapimage} />
              <AboutSectionColumn>
                <AboutSectionRow>
                  <LoggedUserSectionRowHeaderText>
                    DOCUMENT UPLOAD
                  </LoggedUserSectionRowHeaderText>
                  <LoggedUserSectionRowBodyText>
                    Upload Election Results
                  </LoggedUserSectionRowBodyText>
                  <CTAApproveButton className='mt-4' onClick={() => window.open(pageurl.UPLOAD, '_self')}>
                    Proceed
                  </CTAApproveButton>
                </AboutSectionRow>
                <AboutSectionRow>
                  <LoggedUserSectionRowHeaderText>
                    Number of Uploaded Results
                  </LoggedUserSectionRowHeaderText>
                  <LoggedUserSectionRowBodyText>
                    0
                  </LoggedUserSectionRowBodyText>
                </AboutSectionRow>
              </AboutSectionColumn>
            </MapViewSection>
          </BodyColumnLeft>
          <BodyColumnRight>
            <LoggedUserSection>
              {usersectiondata.map((i, index) => (
              <LoggedUserSectionRow key={index} nomargin={index === (usersectiondata.length - 1) ? 'true' : 'false'}>
                <LoggedUserSectionRowHeaderText>
                  {i.title}
                </LoggedUserSectionRowHeaderText>
                <LoggedUserSectionRowBodyText>
                  {i.value}
                </LoggedUserSectionRowBodyText>
              </LoggedUserSectionRow>
              ))}
            </LoggedUserSection>
          </BodyColumnRight>
        </BodyContainer>
      </BodyContainer>
    </>
  )
}

export default Overview