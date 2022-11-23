import React from 'react'
import Header from './header'
import SideMenu from './sidemenu'

import {
  OverLay,
  HeaderBackgroundOverLay,
  ChildrenContainer,
  MainContainer
} from './styled'
import profile from '../../assets/images/user.svg'
import { userData } from '../../constants/global'
import ScrollIntoViewController from './ScrollIntoViewController'
import DataWrapper from '../../wrapper/data-wrapper'
import { IStates } from '../../interface/IReducer'
import { IActions } from '../../interface/IAction'

const Dashboard = ({ children }: { children?: any }) => {
  return (
    <DataWrapper nowrapper='true'>
      <DashboardChild>
        {children}
      </DashboardChild>
    </DataWrapper>
  )
}
interface IDashboardChild {
  states?: IStates
  children: any
}

const DashboardChild: React.FC<IDashboardChild> = ({
  states,
  children,
  ...props
}) => {
  const {
    setMenuOpen,
    setSubMenuOpen
  } = props as unknown as IActions

  const menuOpen = states?.other.menuOpen
  const subMenuOpen = states?.other.subMenuOpen

  const setMenu = () => {
    setMenuOpen(!menuOpen)
    if (!menuOpen) {
      setSubMenuOpen(0)
    }
  }

  return (
        <MainContainer>
           <Header setMenu={setMenu} />
           <HeaderBackgroundOverLay />
            <ScrollIntoViewController>
              <ChildrenContainer>
                  {children}
              </ChildrenContainer>
            </ScrollIntoViewController>
            <SideMenu
                name={userData.user?.firstName + ' ' + userData.user?.lastName}
                role={userData.token?.role || ''}
                imageSrc={userData.user?.profileUrl || profile}
                isOpen={menuOpen || false}
                setSubMenuOpen={setSubMenuOpen}
                subMenuOpen={subMenuOpen || 0}
            />
           {menuOpen ? <OverLay onClick={setMenu} /> : null}
        </MainContainer>
  )
}

export default Dashboard
