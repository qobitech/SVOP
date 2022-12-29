import { styled, Typography } from '@material-ui/core'
import { down } from '../../../assets/style/breakpointHelpers'

export const GetStartedContainer = styled('div')({
  width: '100%',
  background: '#fff'
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

export const Separator = styled('div')(
  ({
    customwidth,
    customheight
  }: {
    customheight?: number | string
    customwidth?: number | string
  }) => ({
    margin: '12px 0',
    width: customwidth || 0,
    background: '#CCCCCC',
    height: customheight || 0
  })
)

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
  // marginLeft: 'auto',
  paddingTop: 3,
  [down('md')]: {
    marginLeft: 0,
    marginTop: 10
  }
})

export const ToggleSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  margin: '0 auto',
  paddingTop: 3,
  flex: 1,
  justifyContent: 'center',
  height: 53,
  boxSizing: 'border-box'
})

export const TopMenuContainer = styled('div')(
  ({ isselected }: { isselected?: 'true' | 'false' }) => ({
    height: 'auto',
    MozBoxSizing: 'border-box',
    borderRadius: '5px 5px 0 0',
    background: isselected === 'true' ? '#fff' : 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px 20px',
    boxSizing: 'border-box',
    width: 'max-content',
    cursor: 'pointer',
    margin: '0 auto',
    transition: '.2s ease-in'
  })
)

export const TopMenuText = styled(Typography)(
  ({ isselected }: { isselected?: 'true' | 'false' }) => ({
    fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    textTransform: 'capitalize',
    fontSize: 12,
    margin: 0,
    marginRight: 9,
    color: isselected === 'true' ? '#fff' : '#286439',
    transition: '.2s ease'
  })
)

export const BodyContainer = styled('div')({
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 5,
  background: '#fff',
  padding: 20,
  boxSizing: 'border-box',
  marginBottom: 20,
  transition: '.2s ease'
})

export const BodySectionComponent = styled('div')({
  width: '100%',
  height: '100%',
  // border: '1px solid #DAEFE0',
  borderRadius: 5,
  padding: '10px 10px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column'
})
