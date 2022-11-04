import { styled, Typography } from '@material-ui/core';

export const SideMenuContainer = styled('div')({
    position: 'fixed',
    left: 0,
    top: 0,
    padding: '10px 5px',
    height: '100vh',
    background: '#fff',
    width: 'max-content',
    zIndex: 5
})

export const ProfileContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'start',
    alignItems: 'center'
})

export const ProfileImage = styled('img')({
    borderRadius: '50%',
    width: 53,
    height: 53,
    marginBottom: 5
})

export const ProfileName = styled(Typography)({
    fontFamily: ['IBX_Medium', 'Arial', 'sans-serif'].join(','),
    textTransform: 'capitalize',
    fontSize: 14,
    margin: 0,
    color: '#3F3F3F'
})

export const ProfileRole = styled(Typography)({
    fontFamily: ['IBX_Regular', 'Arial', 'sans-serif'].join(','),
    textTransform: 'capitalize',
    fontSize: 11,
    margin: 0,
    marginBottom: 5,
    color: '#898989'
})


export const MenuContainer = styled('ul')({
    padding: 5
})

export const ParentMenuContainer = styled('div')({
    width: 159,
    height: 37,
    borderRadius: 5,
    background: '#286439',
    display: 'flex',
    alignItems: 'center',
    padding: '0 10px',
    cursor: 'pointer'
})

export const ParentMenuIcon = styled('img')({
    width: 12,
    marginRight: 7
})

export const ParentMenuToggleIcon = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 'auto'
})

export const ParentMenuText = styled(Typography)({
    fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
    textTransform: 'capitalize',
    fontSize: 14,
    margin: 0,
    color: '#fff'
})

export const SubMenuContainer = styled('div')({
    width: 159,
    height: 37,
    borderRadius: 5,
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
    cursor: 'pointer'
})

export const SubMenuText = styled(Typography)(({selected}:{selected: boolean})=>({
    fontFamily: [selected ? 'Outfit_Medium' : 'Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    textTransform: 'capitalize',
    fontSize: 14,
    margin: 0,
    color: selected ? '#286439' : '#B7B7B7'
}))

export const SubMenuNumbers = styled(Typography)({
    fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
    textTransform: 'capitalize',
    fontSize: 10,
    margin: 0,
    marginLeft: 'auto',
    marginRight: 27,
    color: '#286439',
    width: 'max-content',
    height: 17.15,
    background: '#D2E9D9',
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px'
})
