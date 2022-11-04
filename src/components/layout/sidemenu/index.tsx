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
    SubMenuNumbers
} from './styled'

import result_icon from '../../../assets/images/results-icon.svg'
import toogle_icon from '../../../assets/images/toogle-icon.svg'

interface ISideMenu {
    name: string;
    role: string;
    imageSrc: string;
}

const menuData = [
    {
        id: 1,
        title: 'Results',
        url: '',
        sub: [
            {
                id: 1,
                title: 'Approved',
                url: '',
                menuNumber: 3,
                selected: true
            },
            {
                id: 2,
                title: 'Unapproved',
                url: '',
                menuNumber: 2,
                selected: false
            }
        ]
    }
]

const SideMenu = ({name, role, imageSrc} : ISideMenu) => {
    return(
        <SideMenuContainer>
            <ProfileContainer>
                <ProfileImage src={imageSrc} />
                <ProfileName>
                    {name}
                </ProfileName>
                <ProfileRole>
                    {role}
                </ProfileRole>
            </ProfileContainer>
            <MenuContainer>
                {menuData.map(i=>(
                    <MenuComponent 
                        id={i.id}
                        title={i.title}
                        sub={i.sub}
                        url={i.url}
                        key={i.id}
                    />
                ))}
            </MenuContainer>
        </SideMenuContainer>
    )
}

interface IMenuComponent {
    id: number,
    title: string,
    url: string
    sub:{
        id: number,
        title: string,
        url: string,
        menuNumber: number,
        selected: boolean
    }[]
    
}

const MenuComponent = ({
    id,
    title,
    sub
}: IMenuComponent) => {
    return(
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
                    <SubMenuText selected={i.selected}>
                        {i.title}
                    </SubMenuText>
                    <SubMenuNumbers>
                        {i.menuNumber}
                    </SubMenuNumbers>
                </SubMenuContainer>
            ))}
        </MenuContainer>
    )
}

export default SideMenu