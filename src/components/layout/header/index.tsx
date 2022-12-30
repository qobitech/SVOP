import React from 'react'
import logo from '../../../assets/images/logo.svg'

import {
  HeaderContainer,
  Logo,
  Hamburger,
  LinkContainer,
  LinkMenuLi,
  LinkMenu,
  MenuTitle
} from './styled'

import { pageurl } from '../../../constants/pageurl'
import { ORGANIZATION, ORGANIZATION_FULL } from '../../../constants/global'
import { Separator } from '../../pages/landing/styled'

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
        <LinkMenu>
          <LinkMenuLi>
            <LinkContainer to={pageurl.LANDINGPAGE}>Home</LinkContainer>
          </LinkMenuLi>
          <LinkMenuLi>
            <LinkContainer to={''}>About</LinkContainer>
          </LinkMenuLi>
          <LinkMenuLi>
            <LinkContainer to={''}>How To Vote</LinkContainer>
          </LinkMenuLi>
          <LinkMenuLi>
            <LinkContainer to={pageurl.SPONSORSHIP}>Sponsorship</LinkContainer>
          </LinkMenuLi>
        </LinkMenu>
      </div>
    </HeaderContainer>
  )
}

export default Header
