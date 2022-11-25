import { styled, Typography } from '@material-ui/core'
import { down } from '../../../assets/style/breakpointHelpers'

export const HeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20
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
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
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

export const UploadSection = styled('div')({
  border: '1px dotted black',
  borderRadius: '5px',
  width: '100%',
  height: 400,
  boxSizing: 'border-box',
  padding: '40px 30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
})

export const UploadSectionTextIcon = styled('i')({
  fontSize: 40,
  fontWeight: 600,
  margin: 0,
  color: '#286439',
  marginBottom: 20
})

export const UploadSectionTextHeader = styled(Typography)({
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 16,
  fontWeight: 600,
  margin: 0,
  color: '#286439',
  marginBottom: 20,
  whiteSpace: 'nowrap',
  display: 'flex'
})

export const UploadSectionTextSubHeader = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  fontWeight: 600,
  margin: 0,
  color: '#b9b9b9'
})
