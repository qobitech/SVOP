import React from 'react'
import logo from '../../../assets/images/inec.svg'
// import hamburger from '../../../assets/images/hamburger.svg'
// import profile from '../../../assets/images/user.svg'
// import ellipsis from '../../../assets/images/ellipsis.svg'
// import { userData } from '../../../constants/global'

import {
  HeaderContainer,
  Logo,
  // Hamburger,
  // ProfileContainer,
  // ProfileImage,
  // ProfileEllippis,
  // ProfileName,
  // ProfileRole,
  // ProfileSection,
  LinkContainer
} from './styled'

import { pageurl } from '../../../constants/pageurl'

interface IHeader {
  setMenu: () => void
}

const Header = ({ setMenu }: IHeader) => {
  return (
    <HeaderContainer>
      <LinkContainer to={pageurl.APPROVED} className="d-none d-md-block">
        <Logo src={logo} />
      </LinkContainer>
      {/* <Hamburger src={hamburger} onClick={setMenu}/> */}
      {/* <ProfileContainer> */}
      {/* <LinkContainer to={pageurl.PROFILE}> */}
      {/* <ProfileImage
            src={profile}
            title={userData.user?.firstName + ' ' + userData.user?.lastName}
          />
        </LinkContainer> */}
      {/* <LinkContainer to={pageurl.PROFILE}>
          <ProfileSection>
            <ProfileName className='m-0'>
              {userData.user?.firstName + ' ' + userData.user?.lastName}
            </ProfileName>
            <ProfileRole>
              {userData?.token?.role}
            </ProfileRole>
          </ProfileSection>
        </LinkContainer> */}
      {/* <ProfileEllippis src={ellipsis} title='More Options'/> */}
      {/* </ProfileContainer> */}
    </HeaderContainer>
  )
}

export default Header
