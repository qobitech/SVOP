import React, { useEffect } from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import 'react-toastify/dist/ReactToastify.css'

import { IStates } from '../../../interface/IReducer'
import { IActions } from '../../../interface/IAction'

import { BodyContainer } from '../profile/styled'
import { HeaderContainer } from '../view-result/styled'
import {
  BodyColumnLeft, BodyColumnRight, OverViewSection,
  OverViewSectionColumns, OverViewSectionColumnsBodyText,
  OverViewSectionColumnsHeaderText, LinkContainer, LoggedUserSection,
  LoggedUserSectionRow, LoggedUserSectionRowBodyText, LoggedUserSectionRowHeaderText,
  MapViewSection, MapViewImage, AboutSectionRow, AboutSectionColumn,
  LoggedUserSectionRowHeaderLinkText, HeaderRowSection
} from './styled'

import homeicon from '../../../assets/images/home.png'

import { pageurl } from '../../../constants/pageurl'

import mapimage from '../../../assets/images/map.png'
import { _handleTh } from '../../utils/helper'
import { HeaderImage } from '../../utils/bread-crumb/styled'

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
    getAllResultsAction
  } = props as unknown as IActions

  useEffect(() => {
    getAllResultsAction(PAGE_SIZE, 1)
  }, [])

  const data = states?.result.getAllResults
  // const load = states?.resultState?.result.getAllResults_Loading
  // const error = states?.zoneState?.zone.getAllZones_Error

  const overviewSectionData = [
    {
      title: 'Un-approved',
      value: data?.total || 1,
      url: pageurl.UNAPPROVED
    },
    {
      title: 'Approved',
      value: data?.total || 1,
      url: pageurl.APPROVED
    },
    {
      title: 'Pending',
      value: data?.total || 1,
      url: pageurl.APPROVED
    },
    {
      title: 'Rejected',
      value: data?.total || 1,
      url: pageurl.APPROVED
    }
  ]

  const usersectiondata = [
    {
      title: 'Full Name',
      value: 'User'
    },
    {
      title: 'Email',
      value: 'user@email.com'
    },
    {
      title: 'Phone',
      value: '08063432345'
    },
    {
      title: 'Role',
      value: 'Collation Officer'
    },
    {
      title: 'State of Origin',
      value: 'Adamawa'
    },
    {
      title: 'Gender',
      value: 'Male'
    },
    {
      title: 'State of Origin',
      value: 'Adamawa'
    },
    {
      title: 'Last Login',
      value: '22nd October, 2022 | 12:48pm WAT'
    }
  ]

  const electionData = [
    { title: 'Presidential Election', url: '' },
    { title: 'State Election', url: '' },
    { title: 'House of Reps Election', url: '' },
    { title: 'LGA Election', url: '' }
  ]

  return (
    <>
      <HeaderContainer>
        <HeaderImage src={homeicon} />
      </HeaderContainer>
      <BodyContainer>
        <BodyColumnLeft>
          <OverViewSection>
            {overviewSectionData.map((i, index) => (
              <OverViewSectionColumns key={index} noborder={index === (overviewSectionData.length - 1) ? 'true' : 'false'} >
                <OverViewSectionColumnsHeaderText>
                  {i.title}
                </OverViewSectionColumnsHeaderText>
                <OverViewSectionColumnsBodyText>
                  <LinkContainer to={i.url}>
                    {_handleTh(i?.value?.toString())}
                  </LinkContainer>
                </OverViewSectionColumnsBodyText>
              </OverViewSectionColumns>
            ))}
          </OverViewSection>
          <MapViewSection>
            <MapViewImage src={mapimage} />
            <AboutSectionColumn>
              <AboutSectionRow>
                <LoggedUserSectionRowHeaderText>
                  COUNTRY
                </LoggedUserSectionRowHeaderText>
                <LoggedUserSectionRowBodyText>
                  Nigeria
                </LoggedUserSectionRowBodyText>
              </AboutSectionRow>
              <AboutSectionRow>
                <LoggedUserSectionRowHeaderText>
                  ELECTORAL BODY
                </LoggedUserSectionRowHeaderText>
                <LoggedUserSectionRowBodyText>
                  INEC - <i>Mahmood Yakubu (President)</i>
                </LoggedUserSectionRowBodyText>
              </AboutSectionRow>
              <AboutSectionRow>
                <HeaderRowSection>
                  <LoggedUserSectionRowHeaderText>
                    UPCOMING ELECTION
                  </LoggedUserSectionRowHeaderText>
                  <LoggedUserSectionRowHeaderLinkText>
                    <LinkContainer to={''}>
                      Create New Election +
                    </LinkContainer>
                  </LoggedUserSectionRowHeaderLinkText>
                </HeaderRowSection>
                {electionData.map((i, index) => (
                <LoggedUserSectionRowBodyText key={index}>
                  <LinkContainer to={i.url}>
                    {i.title}
                  </LinkContainer >
                </LoggedUserSectionRowBodyText>
                ))}
              </AboutSectionRow>
              <AboutSectionRow>
                <HeaderRowSection>
                  <LoggedUserSectionRowHeaderText>
                    POLITICAL PARTIES
                  </LoggedUserSectionRowHeaderText>
                  <LoggedUserSectionRowHeaderLinkText>
                      <LinkContainer to={''}>
                        Add New Political Party +
                      </LinkContainer>
                  </LoggedUserSectionRowHeaderLinkText>
                </HeaderRowSection>
                <LoggedUserSectionRowBodyText>
                  18
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
    </>
  )
}

export default Overview
