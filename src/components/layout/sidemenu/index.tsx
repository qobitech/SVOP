import React from 'react'

import {
  SideMenuContainer,
  MenuContainer,
  ParentMenuContainer,
  ParentMenuText,
  SubMenuContainer,
  SubMenuText,
  LinkContainer,
  Logo,
  MainMenuContainer
} from './styled'

import { pageurl } from '../../../constants/pageurl'
import logo from '../../../assets/images/logo.svg'

import './style.scss'

interface ISideMenu {
  isOpen: boolean
  setSubMenuOpen: (subMenuOpen: number) => (dispatch: any) => void
  subMenuOpen: number
}

const menuData = [
  {
    id: 1,
    title: 'Home',
    url: pageurl.LANDINGPAGE,
    sub: [],
    isParent: false,
    icon: 'fa fa-home mr-2'
  },
  {
    id: 2,
    title: 'View Results',
    url: '',
    sub: [],
    isParent: false,
    icon: 'fas fa-check-circle mr-2'
  },
  {
    id: 3,
    title: 'How To Vote',
    url: '',
    sub: [],
    isParent: false,
    icon: 'fas fa-pen mr-2'
  }
]

const SideMenu: React.FC<ISideMenu> = ({
  // name,
  // role,
  // imageSrc,
  isOpen,
  setSubMenuOpen,
  subMenuOpen
}) => {
  return (
    <MainMenuContainer
      className={!isOpen ? 'side_menu_close' : 'side_menu_open'}
    >
      <SideMenuContainer>
        <LinkContainer to={pageurl.PROFILE}>
          <Logo src={logo} />
        </LinkContainer>
        <MenuContainer>
          {menuData.map((i) => (
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
      {!isParent ? (
        <LinkContainer to={url}>
          <ParentMenuContainer>
            <i className={icon} />
            <ParentMenuText>{title}</ParentMenuText>
          </ParentMenuContainer>
        </LinkContainer>
      ) : (
        <ParentMenuContainer
          onClick={() => setSubMenuOpen(subMenuOpen === id ? 0 : id)}
        >
          <i className={icon} />
          <ParentMenuText>{title}</ParentMenuText>
          <i
            className={
              subMenuOpen === id
                ? 'fa fa-angle-down toggle_open ml-auto mr-3'
                : 'fa fa-angle-down toggle_close ml-auto mr-3'
            }
          />
        </ParentMenuContainer>
      )}
      {subMenuOpen === id &&
        sub.map((i) => (
          <SubMenuContainer key={i.id}>
            <LinkContainer to={i.url}>
              <SubMenuText selected={i.selected}>{i.title}</SubMenuText>
            </LinkContainer>
          </SubMenuContainer>
        ))}
    </MenuContainer>
  )
}

export default SideMenu
