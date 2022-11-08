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

const Dashboard = ({ children }: { children?: any }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false)

  const setMenu = () => {
    setOpenSideMenu(!openSideMenu)
  }

  return (
        <MainContainer>
           <Header setMenu={setMenu} />
           <HeaderBackgroundOverLay />

            <ChildrenContainer>
                {children}
            </ChildrenContainer>
           {openSideMenu
             ? <>
                    <SideMenu
                        name={userData.user?.firstName + ' ' + userData.user?.lastName}
                        role={userData.token?.role || ''}
                        imageSrc={userData.user?.profileUrl || profile}
                    />
                    <OverLay onClick={setMenu} />
                </>
             : null}
        </MainContainer>
  )
}

export default Dashboard
