import React, { useState } from 'react'
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

const Dashboard = ({ children }: { children?: any }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)

  const setMenu = () => {
    setOpenSideMenu(!openSideMenu)
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
                isOpen={openSideMenu}
            />
           {openSideMenu ? <OverLay onClick={setMenu} /> : null}
        </MainContainer>
  )
}

export default Dashboard
