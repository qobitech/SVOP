import React from 'react'

import {
  SideMenuContainer,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  ProfileRole,
  MenuContainer,
  ParentMenuContainer,
  ParentMenuIcon,
  ParentMenuText,
  ParentMenuToggleIcon,
  SubMenuContainer,
  SubMenuText,
  SubMenuNumbers,
  LogoutSection,
  LogoutText,
  LinkContainer
} from './styled'

import result_icon from '../../../assets/images/results-icon.svg'
import toogle_icon from '../../../assets/images/toogle-icon.svg'
import logout_icon from '../../../assets/images/logout.svg'
import { pageurl } from '../../../constants/pageurl'

interface ISideMenu {
  name: string
  role: string
  imageSrc: string
}

const menuData = [
  {
    id: 1,
    title: 'Results',
    url: '',
    sub: [
      {
        id: 1,
        title: 'Unapproved',
        url: pageurl.UNAPPROVED,
        menuNumber: 2,
        selected: true
      },
      {
        id: 2,
        title: 'Approved',
        url: pageurl.APPROVED,
        menuNumber: 3,
        selected: true
      }
    ]
  }
]

const SideMenu = ({ name, role, imageSrc }: ISideMenu) => {
  return (
        <SideMenuContainer>
            <LinkContainer to={pageurl.PROFILE}>
                <ProfileContainer>
                    <ProfileImage src={imageSrc} />
                        <ProfileName>
                            {name}
                        </ProfileName>
                    <ProfileRole>
                        {role}
                    </ProfileRole>
                </ProfileContainer>
            </LinkContainer>
            <MenuContainer>
                {menuData.map(i => (
                    <MenuComponent
                        id={i.id}
                        title={i.title}
                        sub={i.sub}
                        url={i.url}
                        key={i.id}
                    />
                ))}
            </MenuContainer>
            <LogoutSection
                    onClick={() => {
                      localStorage.clear()
                      window.open(pageurl.LOGIN, '_self')
                    }}
                >
                <ParentMenuIcon src={logout_icon} />
                <LogoutText>
                    Logout
                </LogoutText>
            </LogoutSection>
        </SideMenuContainer>
  )
}

interface IMenuComponent {
  id: number
  title: string
  url: string
  sub: Array<{
    id: number
    title: string
    url: string
    menuNumber: number
    selected: boolean
  }>

}

const MenuComponent = ({
  id,
  title,
  sub
}: IMenuComponent) => {
  return (
        <MenuContainer key={id}>
            <ParentMenuContainer>
                <ParentMenuIcon src={result_icon} />
                <ParentMenuText>
                    {title}
                </ParentMenuText>
                <ParentMenuToggleIcon src={toogle_icon} />
            </ParentMenuContainer>
            {sub.map(i => (
                <SubMenuContainer key={i.id}>
                    <LinkContainer to={i.url}>
                        <SubMenuText selected={i.selected}>
                            {i.title}
                        </SubMenuText>
                    </LinkContainer>
                    <SubMenuNumbers>
                        {i.menuNumber}
                    </SubMenuNumbers>
                </SubMenuContainer>
            ))}
        </MenuContainer>
  )
}

export default SideMenu
