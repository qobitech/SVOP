import React from 'react'

import {
  SideMenuContainer,
  ProfileContainer,
  ProfileImage,
  ProfileName,
  ProfileRole,
  MenuContainer,
  ParentMenuContainer,
  ParentMenuText,
  SubMenuContainer,
  SubMenuText,
  LogoutSection,
  LinkContainer,
  MainMenuContainer
} from './styled'

import { pageurl } from '../../../constants/pageurl'

import './style.scss'

interface ISideMenu {
  name: string
  role: string
  imageSrc: string
  isOpen: boolean
  setSubMenuOpen: (subMenuOpen: number) => (dispatch: any) => void
  subMenuOpen: number
}

const menuData = [
  // {
  //   id: 1,
  //   title: 'Overview',
  //   url: pageurl.OVERVIEW,
  //   sub: [],
  //   isParent: false,
  //   icon: 'fa fa-list-alt mr-2'
  // },
  {
    id: 2,
    title: 'Results',
    url: '',
    sub: [
      // {
      //   id: 1,
      //   title: 'Unapproved',
      //   url: pageurl.UNAPPROVED,
      //   menuNumber: 2,
      //   selected: true
      // },
      {
        id: 2,
        title: 'Approved',
        url: pageurl.APPROVED,
        menuNumber: 3,
        selected: true
      }
      // {
      //   id: 3,
      //   title: 'Rejected',
      //   url: pageurl.REJECTED,
      //   menuNumber: 3,
      //   selected: true
      // }
    ],
    isParent: true,
    icon: 'fas fa-check mr-2'
  },
  // {
  //   id: 3,
  //   title: 'Documents',
  //   url: '',
  //   sub: [
  //     {
  //       id: 1,
  //       title: 'Upload Result',
  //       url: pageurl.UPLOAD,
  //       menuNumber: 2,
  //       selected: true
  //     }
  //   ],
  //   isParent: true,
  //   icon: 'fas fa-file mr-2'
  // },
  {
    id: 4,
    title: 'Profile',
    url: '',
    sub: [
      {
        id: 1,
        title: 'View Profile',
        url: pageurl.PROFILE,
        menuNumber: 2,
        selected: true
      }
    ],
    isParent: true,
    icon: 'fas fa-user mr-2'
  },
  {
    id: 5,
    title: 'Instructions',
    url: pageurl.INSTRUCTIONS,
    sub: [],
    isParent: false,
    icon: 'fa fa-pen mr-2'
  }
]

const SideMenu: React.FC<ISideMenu> = ({
  name,
  role,
  imageSrc,
  isOpen,
  setSubMenuOpen,
  subMenuOpen
}) => {
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
                          icon={i.icon}
                          setSubMenuOpen={setSubMenuOpen}
                          subMenuOpen={subMenuOpen}
                      />
                  ))}
              </MenuContainer>
              <LogoutSection
                      onClick={() => {
                        localStorage.clear()
                        window.open(pageurl.LOGIN, '_self')
                      }}
                  >
                  <ParentMenuContainer>
                    <i className='fa fa-sign-out mr-2' />
                    <ParentMenuText>
                        Logout
                    </ParentMenuText>
                  </ParentMenuContainer>
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
  icon: string
  setSubMenuOpen: (subMenuOpen: number) => (dispatch: any) => void
  subMenuOpen: number
}

const MenuComponent: React.FC<IMenuComponent> = ({
  id,
  title,
  sub,
  isParent,
  url,
  icon,
  setSubMenuOpen,
  subMenuOpen
}) => {
  return (
        <MenuContainer key={id}>
            {!isParent
              ? <LinkContainer to={url}>
              <ParentMenuContainer>
                  <i className={icon} />
                  <ParentMenuText>
                      {title}
                  </ParentMenuText>
              </ParentMenuContainer>
            </LinkContainer>
              : <ParentMenuContainer onClick={() => setSubMenuOpen(subMenuOpen === id ? 0 : id)}>
                <i className={icon} />
                <ParentMenuText>
                    {title}
                </ParentMenuText>
                <i className={ subMenuOpen === id ? 'fa fa-angle-down toggle_open ml-auto mr-3' : 'fa fa-angle-down toggle_close ml-auto mr-3' } />
              </ParentMenuContainer>}
            {subMenuOpen === id && sub.map(i => (
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
