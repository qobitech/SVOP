import { styled, Typography } from '@material-ui/core'

export const FooterContainer = styled('div')({
  display: 'flex',
  padding: '15px',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 4,
  position: 'fixed',
  background: '#E5F9EB',
  width: '100%',
  bottom: 0,
  left: 0
})

export const Copyright = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 16,
  margin: 0
})

export const Logo = styled('img')({
  marginRight: 20,
  height: 70
})
