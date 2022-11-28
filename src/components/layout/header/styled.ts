import { styled, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { down } from '../../../assets/style/breakpointHelpers'

export const HeaderContainer = styled('div')({
  display: 'flex',
  padding: '10px 15px',
  alignItems: 'center',
  zIndex: 4,
  position: 'fixed',
  background: '#E5F9EB',
  width: '100%',
  top: 0,
  left: 0
})

export const Logo = styled('img')({
  marginRight: 20
})

export const Hamburger = styled('img')({
  marginRight: 10,
  cursor: 'pointer'
})

export const ProfileContainer = styled('div')({
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto'
})

export const ProfileSection = styled('div')({
  display: 'flex',
  flexDirection: 'column'
})

export const ProfileName = styled(Typography)({
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 16,
  margin: 0,
  paddingRight: 30
})

export const ProfileRole = styled(Typography)({
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 12,
  margin: 0,
  color: '#a9a9a9'
})

export const ProfileImage = styled('img')({
  borderRadius: '50%',
  width: 34,
  height: 34,
  marginRight: 10
})

export const ProfileNotification = styled('img')({
  width: 20,
  height: 20,
  marginRight: 35,
  cursor: 'pointer',
  [down('sm')]: {
    display: 'none'
  }
})

export const ProfileEllippis = styled('img')({
  width: 15,
  height: 15,
  cursor: 'pointer'
})

export const LinkContainer = styled(Link)({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  display: 'flex',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'none',
    color: 'inherit'
  }
})
