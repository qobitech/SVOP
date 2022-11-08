import React from 'react'
import logo from '../../../assets/images/logo.svg'
import hamburger from '../../../assets/images/hamburger.svg'
import profile from '../../../assets/images/user.svg'
import notification from '../../../assets/images/notification.svg'
import ellipsis from '../../../assets/images/ellipsis.svg'
import { userData } from '../../../constants/global'

import {
  HeaderContainer,
  Logo,
  Hamburger,
  ProfileContainer,
  ProfileImage,
  ProfileNotification,
  ProfileEllippis
} from './styled'

import {
  LinkContainer
} from '../../utils/reusable/styled'
import { pageurl } from '../../../constants/pageurl'

interface IHeader {
  setMenu: () => void
}

const Header = ({ setMenu }: IHeader) => {
  return (
    <HeaderContainer>
      <LinkContainer to={pageurl.UNAPPROVED}>
        <Logo src={logo} />
      </LinkContainer>
      <Hamburger src={hamburger} onClick={setMenu}/>
      <ProfileContainer>
        <ProfileNotification src={notification} title='Notification' />
        <LinkContainer to={pageurl.PROFILE}>
          <ProfileImage
            src={userData.user?.profileUrl || profile}
            title={userData.user?.firstName + ' ' + userData.user?.lastName}
          />
        </LinkContainer>
        <ProfileEllippis src={ellipsis} title='More Options'/>
      </ProfileContainer>
    </HeaderContainer>
  )
}

export default Header
