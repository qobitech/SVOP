import { styled, Typography } from '@material-ui/core'
import { down } from '../../../assets/style/breakpointHelpers'

export const BodyContainer = styled('div')({
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 5,
  background: '#fff',
  padding: 20,
  boxSizing: 'border-box',
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  justifyContent: 'space-between'
})

export const HeaderText = styled(Typography)({
  fontFamily: ['IBX_Bold', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 16,
  fontWeight: 600,
  margin: 0,
  marginRight: 5,
  color: '#286439'
})

export const BodySection = styled('div')({
  width: '49%',
  height: 'auto',
  margin: 0,
  textAlign: 'center',
  [down('md')]: {
    width: '100%',
    margin: '20px 0'
  }
})

export const BodySectionComponent = styled('div')({
  width: '100%',
  height: '100%',
  border: '1px solid #DAEFE0',
  borderRadius: 5,
  padding: 30,
  boxSizing: 'border-box',
  display: 'flex'
})

export const ProfileImageSection = styled('img')({
  maxWidth: 300,
  maxHeight: 300,
  width: '100%',
  height: '100%',
  margin: '0 auto'
})
