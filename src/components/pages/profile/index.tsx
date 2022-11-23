import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import {
  BodySection,
  BodySectionComponent,
  BodyContainer,
  ProfileImageSection,
  ProfileUserSection,
  LoggedUserSectionRow,
  LoggedUserSectionRowHeaderText,
  LoggedUserSectionRowBodyText
} from './styled'

import profile from '../../../assets/images/user.svg'
import { userData } from '../../../constants/global'

import BreadCrumb from '../../utils/bread-crumb'
import { pageurl } from '../../../constants/pageurl'

const Profile = () => {
  return (
        <DataWrapper>
            <ProfileChild />
        </DataWrapper>
  )
}

const ProfileChild = () => {
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

  return (
        <>
            <BreadCrumb crumbs={[{ title: 'Profile', url: pageurl.PROFILE }]}/>
            <BodyContainer>
                <BodySection>
                    <BodySectionComponent>
                        <ProfileImageSection src={profile} />
                    </BodySectionComponent>
                </BodySection>
                <BodySection>
                    <BodySectionComponent>
                        <ProfileUserSection>
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
                        </ProfileUserSection>
                    </BodySectionComponent>
                </BodySection>
            </BodyContainer>
        </>
  )
}

export default Profile
