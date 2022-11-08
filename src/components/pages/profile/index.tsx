import React from 'react'
import DataWrapper from '../../../wrapper/data-wrapper'

import {
  HeaderContainer,
  HeaderText
} from '../../utils/reusable/styled'

import {
  BodySection,
  BodySectionComponent,
  BodyContainer,
  ProfileImageSection
} from './styled'

// import { useParams } from 'react-router-dom'
// import { pageurl } from '../../../constants/pageurl'

import profile from '../../../assets/images/user.svg'
import { userData } from '../../../constants/global'

const Profile = () => {
  return (
        <DataWrapper>
            <ProfileChild />
        </DataWrapper>
  )
}

const ProfileChild = () => {
  // const { id } = useParams()

  return (
        <>
            <HeaderContainer>
                <HeaderText>
                    Profile
                </HeaderText>
            </HeaderContainer>
            <BodyContainer>
                <BodySection>
                    <BodySectionComponent>
                        <ProfileImageSection src={userData.user?.profileUrl || profile} />
                    </BodySectionComponent>
                </BodySection>
                <BodySection>
                    <BodySectionComponent />
                </BodySection>
            </BodyContainer>
        </>
  )
}

export default Profile
