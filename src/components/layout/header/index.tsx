import React from 'react'
import logo from '../../../assets/images/logo.svg'

import {
  HeaderContainer,
  Logo,
  Hamburger,
  LinkContainer,
  LinkMenuLi,
  LinkMenu,
  MenuTitle,
  ProfileContainer,
  ProfileEllippis,
  ProfileName,
  ProfileEllippisContainer
} from './styled'

import { pageurl } from '../../../constants/pageurl'
import {
  isLogged,
  ORGANIZATION,
  ORGANIZATION_FULL,
  userData
} from '../../../constants/global'
import { Separator } from '../../pages/landing/styled'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import ellipsis from '../../../assets/images/ellipsis.svg'

interface IHeader {
  setMenu: () => void
}

const Header = ({ setMenu }: IHeader) => {
  return (
    <HeaderContainer>
      <LinkContainer
        to={pageurl.LANDINGPAGE}
        className="d-none d-lg-flex align-items-center"
        title={ORGANIZATION_FULL}
      >
        <Logo src={logo} />
        <Separator customwidth={8} />
        <MenuTitle className="m-0">{ORGANIZATION}</MenuTitle>
      </LinkContainer>
      <Hamburger onClick={setMenu} className="d-flex d-lg-none">
        <p className="m-0">
          <span>
            <i className="fa fa-bars mr-2" />
          </span>
          Menu
        </p>
      </Hamburger>
      <LinkContainer
        to={pageurl.LANDINGPAGE}
        className="d-flex d-lg-none mx-auto p-0"
      >
        <Logo src={logo} />
      </LinkContainer>
      <div className="ml-auto d-none d-lg-flex align-items-center">
        {!isLogged ? (
          <LinkMenu>
            <LinkMenuLi>
              <LinkContainer to={pageurl.LANDINGPAGE}>HOME</LinkContainer>
            </LinkMenuLi>
            <LinkMenuLi>
              <LinkContainer
                to={
                  !isLogged
                    ? pageurl.GETSTARTED
                    : pageurl.VOTE + `/${userData._doc._id}`
                }
              >
                Vote
              </LinkContainer>
            </LinkMenuLi>
            <LinkMenuLi>
              <LinkContainer to={pageurl.SPONSORSHIP}>
                Sponsorship
              </LinkContainer>
            </LinkMenuLi>
          </LinkMenu>
        ) : (
          <ProfileContainer>
            <ProfileName className="m-0">
              {userData?._doc?.name?.toLowerCase()}
            </ProfileName>
            <div className="dropdown">
              <ProfileEllippisContainer
                className="dropdown-toggle"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <ProfileEllippis src={ellipsis} title="More Options" />
              </ProfileEllippisContainer>

              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <DropdownItem
                  className="dropdown-item"
                  onClick={() => {
                    window.open(pageurl.VOTE + `/${userData._doc._id}`, '_self')
                  }}
                  style={{ fontSize: '13px' }}
                >
                  <i className="fa fa-check-circle" />
                  &nbsp;&nbsp;Vote
                </DropdownItem>
                <DropdownItem
                  className="dropdown-item"
                  onClick={() => {
                    window.open(pageurl.SPONSORSHIP, '_self')
                  }}
                  style={{ fontSize: '13px' }}
                >
                  <i className="fa fa-money" />
                  &nbsp;&nbsp;Sponsorship
                </DropdownItem>

                <DropdownItem
                  className="dropdown-item"
                  onClick={() => {
                    localStorage.clear()
                    window.open(pageurl.LANDINGPAGE, '_self')
                  }}
                  style={{ fontSize: '13px' }}
                >
                  <i className="fa fa-sign-out" />
                  &nbsp;&nbsp;Log out
                </DropdownItem>
              </ul>
            </div>
          </ProfileContainer>
        )}
      </div>
    </HeaderContainer>
  )
}

export default Header
