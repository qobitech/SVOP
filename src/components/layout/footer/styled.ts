import { styled } from '@material-ui/core'

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

export const Logo = styled('img')({
  marginRight: 20,
  width: 125,
  height: 75
})
