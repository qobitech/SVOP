import { styled, Typography } from '@material-ui/core'
import { down } from '../../../assets/style/breakpointHelpers'

export const FooterContainer = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  padding: '15px',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 4,
  position: 'fixed',
  background: '#E5F9EB',
  width: '100%',
  bottom: 0,
  left: 0,
  [down('md')]: {
    flexDirection: 'column-reverse'
  }
})

export const Copyright = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  margin: 0,
  [down('md')]: {
    marginTop: 10,
    fontSize: 12
  }
})

export const Logo = styled('img')({
  marginRight: 20,
  maxHeight: 70,
  maxWidth: 352,
  width: '100%',
  height: '100%'
})
