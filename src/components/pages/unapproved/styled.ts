import { styled, Typography } from '@material-ui/core'
import { down } from '../../../assets/style/breakpointHelpers'

export const HeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20
})

export const BodyContainer = styled('div')({
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 5,
  background: '#fff',
  padding: 20,
  boxSizing: 'border-box'
})

export const HeaderText = styled(Typography)({
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 16,
  fontWeight: 600,
  margin: 0,
  marginRight: 5,
  color: '#286439'
})

export const HeaderTextNumbers = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 16,
  margin: 0,
  color: '#286439',
  width: 'max-content',
  height: 'max-content',
  background: '#D2E9D9',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 8px'
})

export const HeaderBodyText = styled(Typography)({
  fontFamily: ['Outfit_Light', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 25,
  fontWeight: 600,
  margin: 0,
  marginRight: 25,
  color: '#286439'
})

export const SelectedTableActionsSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  paddingTop: 3,
  [down('md')]: {
    marginLeft: 0,
    marginTop: 10
  }
})
