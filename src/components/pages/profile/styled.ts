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
  justifyContent: 'space-between',
  paddingBottom: 140
})

export const LoggedUserSectionRow = styled('div')(
  ({ nomargin }: { nomargin?: 'true' | 'false' }) => ({
    width: '100%',
    height: 'auto',
    boxSizing: 'border-box',
    marginBottom: nomargin === 'true' ? 0 : 30,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  })
)

export const LoggedUserSectionRowHeaderText = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 12,
  margin: 0,
  marginBottom: 5,
  textTransform: 'uppercase',
  color: '#616161'
})

export const LoggedUserSectionRowBodyText = styled(Typography)({
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 16
})

export const ProfileUserSection = styled('div')({
  width: '100%',
  height: '100%',
  padding: 0,
  boxSizing: 'border-box',
  borderRadius: 5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
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
  maxWidth: 500,
  maxHeight: 500,
  width: '100%',
  height: '100%',
  margin: '0 auto'
})
