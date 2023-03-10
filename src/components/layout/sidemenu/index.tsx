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
  MainMenuContainer,
  MenuTitle,
  LogoutSection
} from './styled'

import { pageurl } from '../../../constants/pageurl'
import logo from '../../../assets/images/logo.svg'

import './style.scss'
import {
  isLogged,
  ORGANIZATION,
  ORGANIZATION_FULL,
  SHOWRESULTPAGE,
  userData
} from '../../../constants/global'
import { Separator } from '../../pages/landing/styled'

interface ISideMenu {
  isOpen: boolean
  setSubMenuOpen: (subMenuOpen: number) => (dispatch: any) => void
  subMenuOpen: number
  setMenu: () => void
}

const menuData = [
  {
    id: 1,
    title: 'Home',
    url: pageurl.LANDINGPAGE,
    sub: [],
    isParent: false,
    icon: '',
    show: true
  },
  {
    id: 2,
    title: 'Vote',
    url: isLogged
      ? pageurl.VOTE + '/' + userData?._doc?._id
      : pageurl.GETSTARTED,
    sub: [],
    isParent: false,
    icon: '',
    show: true
  },
  {
    id: 3,
    title: 'Sponsorship',
    url: pageurl.SPONSORSHIP,
    sub: [],
    isParent: false,
    icon: '',
    show: true
  },
  {
    id: 3,
    title: 'View Results',
    url: pageurl.RESULTS + '/' + userData?._doc?._id,
    sub: [],
    isParent: false,
    icon: '',
    show: SHOWRESULTPAGE
  }
]

const SideMenu: React.FC<ISideMenu> = ({
  // name,
  // role,
  // imageSrc,
  isOpen,
  setSubMenuOpen,
  subMenuOpen,
  setMenu
}) => {
  const shortenName = (name: string) => {
    return name.length > 40
      ? name.toLowerCase().substring(0, 35) + '...'
      : name.toLowerCase()
  }

  return (
    <MainMenuContainer
      className={!isOpen ? 'side_menu_close' : 'side_menu_open'}
    >
      <SideMenuContainer>
        <LinkContainer
          to={pageurl.LANDINGPAGE}
          className="d-flex align-items-center"
          title={ORGANIZATION_FULL}
        >
          <Logo src={logo} />
          <Separator customwidth={8} />
          <MenuTitle className="m-0">{ORGANIZATION}</MenuTitle>
        </LinkContainer>
        <div className="pl-4 mb-3">
          <p style={{ fontSize: '14px', textTransform: 'capitalize' }}>
            <b>
              <div
                dangerouslySetInnerHTML={{
                  __html: shortenName(userData?._doc?.name || '')
                }}
              />
            </b>
          </p>
        </div>
        <MenuContainer>
          {menuData
            .filter((i) => i.show)
            .map((i) => (
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
                setMenu={setMenu}
              />
            ))}
        </MenuContainer>
        {isLogged && (
          <LogoutSection
            onClick={() => {
              localStorage.clear()
              window.open(pageurl.LANDINGPAGE, '_self')
            }}
          >
            <ParentMenuContainer>
              <i className="fa fa-sign-out mr-2" />
              <ParentMenuText>Logout</ParentMenuText>
            </ParentMenuContainer>
          </LogoutSection>
        )}
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
  setMenu: () => void
}

const MenuComponent: React.FC<IMenuComponent> = ({
  id,
  title,
  sub,
  isParent,
  url,
  icon,
  setSubMenuOpen,
  subMenuOpen,
  setMenu
}) => {
  return (
    <MenuContainer key={id}>
      {!isParent ? (
        <LinkContainer to={url} onClick={setMenu}>
          <ParentMenuContainer>
            <i className={icon} />
            <ParentMenuText>{title}</ParentMenuText>
          </ParentMenuContainer>
        </LinkContainer>
      ) : (
        <ParentMenuContainer
          onClick={() => {
            setSubMenuOpen(subMenuOpen === id ? 0 : id)
          }}
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
