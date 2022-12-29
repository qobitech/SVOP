import { styled, Typography } from '@material-ui/core'
import { down } from '../../../assets/style/breakpointHelpers'
import { MAXWIDTH } from '../../../constants/global'

export const FooterContainer = styled('footer')({
  background: '#FFF',
  width: '100%',
  marginTop: 'auto'
})

export const MaxWidthContainer = styled('div')({
  display: 'flex',
  maxWidth: MAXWIDTH,
  margin: '0 auto',
  flexDirection: 'column',
  alignItems: 'center',
  background: '#FFF',
  width: '100%'
})

export const CopyRightContainer = styled('div')({
  textAlign: 'center',
  padding: '10px 0 25px'
})

export const Copyright = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  margin: 0,
  [down('md')]: {
    fontSize: 12
  }
})
