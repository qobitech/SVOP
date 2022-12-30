import { styled, Typography } from '@material-ui/core'
import { down } from '../../../assets/style/breakpointHelpers'

import { Link } from 'react-router-dom'
import { COLOR } from '../../../constants/global'

export const LinkContainer = styled(Link)({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    color: 'inherit',
    textDecoration: 'none'
  }
})

export const MainMenuContainer = styled('div')({
  position: 'fixed',
  top: 0,
  padding: 0,
  height: '100vh',
  background: '#fff',
  minWidth: 200,
  zIndex: 5,
  overflow: 'auto',
  boxSizing: 'border-box',
  [down('md')]: {
    minWidth: '70%'
  }
})

export const SideMenuContainer = styled('div')({
  height: '100vh',
  background: '#fff',
  width: '100%',
  zIndex: 5,
  overflow: 'auto',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  [down('sm')]: {
    height: '90vh'
  }
})

export const ProfileContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 10px',
  justifyContent: 'start',
  alignItems: 'center'
})

export const Logo = styled('img')({
  borderRadius: '50%',
  width: 30,
  height: 30,
  marginBottom: 35,
  marginLeft: 20,
  marginTop: 30
})

export const ProfileName = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 14,
  margin: 0
})

export const ProfileRole = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 11,
  margin: 0,
  marginBottom: 5
})

export const MenuContainer = styled('ul')({
  padding: 0,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box'
})

export const ParentMenuContainer = styled('div')(
  ({ isselected }: { isselected?: 'true' | 'false' }) => ({
    height: 37,
    borderRadius: 0,
    background: isselected === 'true' ? '#286439' : '#fff',
    borderBottom: '1px solid #e7e7e7',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: '.2s ease',
    width: '100%',
    padding: '35px 10px 35px 25px'
  })
)

export const MenuTitle = styled(Typography)({
  fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  margin: 0,
  letterSpacing: 5,
  color: COLOR
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

export const LogoutText = styled('p')({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  margin: 0,
  cursor: 'pointer'
})

export const ParentMenuText = styled(Typography)(
  ({ isselected }: { isselected?: 'true' | 'false' }) => ({
    fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
    textTransform: 'capitalize',
    fontSize: 16,
    transition: '.2s ease'
  })
)

export const SubMenuContainer = styled('div')({
  width: 159,
  height: 37,
  borderRadius: 5,
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: 35,
  cursor: 'pointer',
  justifyContent: 'space-between',
  [down('md')]: {
    paddingLeft: 45
  }
})

export const SubMenuText = styled(Typography)(
  ({ selected }: { selected: boolean }) => ({
    fontFamily: [
      selected ? 'Outfit_Light' : 'Outfit_Regular',
      'Arial',
      'sans-serif'
    ].join(','),
    textTransform: 'capitalize',
    fontSize: 14,
    margin: 0,
    color: selected ? '#286439' : '#B7B7B7'
  })
)

export const SubMenuNumbers = styled(Typography)({
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 10,
  margin: 0,
  marginLeft: 'auto',
  width: 'max-content',
  height: 17.15,
  background: '#D2E9D9',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 8px'
})

export const LogoutSection = styled('div')({
  height: 37,
  borderRadius: 5,
  background: 'none',
  display: 'flex',
  alignItems: 'center',
  padding: '0',
  marginTop: 'auto',
  cursor: 'pointer'
})
