import React, { useState } from 'react'

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
  SubMenuContainer,
  SubMenuText,
  LogoutSection,
  LogoutText,
  LinkContainer,
  MainMenuContainer
} from './styled'

import logout_icon from '../../../assets/images/logout.svg'
import { pageurl } from '../../../constants/pageurl'

import './style.scss'

interface ISideMenu {
  name: string
  role: string
  imageSrc: string
  isOpen: boolean
}

const menuData = [
  {
    id: 1,
    title: 'Overview',
    url: pageurl.OVERVIEW,
    sub: [],
    isParent: false
  },
  {
    id: 2,
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
    ],
    isParent: true
  }
]

const SideMenu = ({ name, role, imageSrc, isOpen }: ISideMenu) => {
  return (
        <MainMenuContainer className={!isOpen ? 'side_menu_close' : 'side_menu_open'}>
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
                          isParent={i.isParent}
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
        </MainMenuContainer>
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
  isParent: boolean
}

const MenuComponent = ({
  id,
  title,
  sub,
  isParent,
  url
}: IMenuComponent) => {
  const [isSubOpen, setIsSubOpen] = useState(false)
  return (
        <MenuContainer key={id}>
            {!isParent
              ? <LinkContainer to={url}>
              <ParentMenuContainer>
                  <i className='fa fa-list-alt mr-2' />
                  <ParentMenuText>
                      {title}
                  </ParentMenuText>
              </ParentMenuContainer>
            </LinkContainer>
              : <ParentMenuContainer onClick={() => setIsSubOpen(!isSubOpen)}>
                <i className='fas fa-check mr-2' />
                <ParentMenuText>
                    {title}
                </ParentMenuText>
                <i className={ isSubOpen ? 'fa fa-angle-down toggle_open ml-auto mr-3' : 'fa fa-angle-down toggle_close ml-auto mr-3' } />
              </ParentMenuContainer>}
            {isSubOpen && sub.map(i => (
                <SubMenuContainer key={i.id}>
                    <LinkContainer to={i.url}>
                        <SubMenuText selected={i.selected}>
                            {i.title}
                        </SubMenuText>
                    </LinkContainer>
                </SubMenuContainer>
            ))}
        </MenuContainer>
  )
}

export default SideMenu
