import { styled, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { down } from '../../../assets/style/breakpointHelpers'

export const BodyColumnLeft = styled('div')({
  width: '67%',
  boxSizing: 'border-box',
  [down('md')]: {
    width: '100%'
  }
})

export const BodyColumnRight = styled('div')({
  width: '31%',
  boxSizing: 'border-box',
  [down('md')]: {
    width: '100%',
    marginTop: 30
  }
})

export const OverViewSection = styled('div')({
  width: '100%',
  height: 'auto',
  padding: 40,
  boxSizing: 'border-box',
  borderRadius: 5,
  marginBottom: 30,
  background: '#FAC02C',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  [down('md')]: {
    flexDirection: 'column'
  }
})

export const MapViewSection = styled('div')({
  width: '100%',
  height: 'auto',
  padding: 40,
  boxSizing: 'border-box',
  borderRadius: 5,
  border: '1px solid #e7e7e7',
  background: 'none',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  [down('md')]: {
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
})

export const MapViewImage = styled('img')({
  maxWidth: 350,
  width: '100%',
  [down('md')]: {
    marginBottom: 40
  }
})

export const LoggedUserSection = styled('div')({
  width: '100%',
  height: '100%',
  padding: 40,
  boxSizing: 'border-box',
  borderRadius: 5,
  border: '1px solid #e7e7e7',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
})

export const LoggedUserSectionRow = styled('div')(({ nomargin }: { nomargin?: 'true' | 'false' }) => ({
  width: '100%',
  height: 'auto',
  boxSizing: 'border-box',
  marginBottom: nomargin === 'true' ? 0 : 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
}))

export const AboutSectionColumn = styled('div')(({ nomargin }: { nomargin?: 'true' | 'false' }) => ({
  width: '100%',
  height: 'auto',
  boxSizing: 'border-box',
  marginBottom: nomargin === 'true' ? 0 : 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  paddingLeft: 30,
  [down('md')]: {
    justifyContent: 'center'
  }
}))

export const AboutSectionRow = styled('div')(({ nomargin }: { nomargin?: 'true' | 'false' }) => ({
  width: '100%',
  height: 'auto',
  boxSizing: 'border-box',
  marginBottom: nomargin === 'true' ? 0 : 30,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  [down('md')]: {
    justifyContent: 'center'
  }
}))

export const LoggedUserSectionRowHeaderText = styled(Typography)({
  fontFamily: ['IBX_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 12,
  margin: 0,
  marginBottom: 5,
  textTransform: 'uppercase',
  color: '#616161'
})

export const LoggedUserSectionRowHeaderLinkText = styled(Typography)({
  fontFamily: ['IBX_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 12,
  margin: 0,
  marginBottom: 5,
  color: '#286439'
})

export const HeaderRowSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  flexWrap: 'wrap',
  [down('md')]: {
    marginBottom: 20
  }
})

export const LoggedUserSectionRowBodyText = styled(Typography)({
  fontFamily: ['IBX_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 16
})

export const OverViewSectionColumns = styled('div')(({ noborder }: { noborder?: 'true' | 'false' }) => ({
  height: 'auto',
  padding: 0,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  [down('md')]: {
    marginBottom: noborder === 'true' ? 0 : 40
  }
}))

export const OverViewSectionColumnsHeaderText = styled(Typography)({
  fontFamily: ['IBX_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 12,
  margin: 0,
  marginBottom: 5,
  textTransform: 'uppercase'
})

export const OverViewSectionColumnsBodyText = styled(Typography)({
  fontFamily: ['IBX_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 25
})

export const LinkContainer = styled(Link)({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  display: 'flex',
  textDecoration: 'underline',
  '&:hover': {
    color: 'inherit'
  }
})
