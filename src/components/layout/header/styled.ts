import { styled } from '@material-ui/core'
import { down } from '../../../assets/style/breakpointHelpers'

export const HeaderContainer = styled('div')({
  display: 'flex',
  padding: '15px',
  alignItems: 'center',
  zIndex: 2,
  position: 'relative'
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

export const ProfileImage = styled('img')({
  borderRadius: '50%',
  width: 25,
  height: 25,
  marginRight: 30,
  [down('sm')]: {
    display: 'none'
  }
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
