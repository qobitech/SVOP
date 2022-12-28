import { styled, Typography } from '@material-ui/core'
import { COLOR, MAXWIDTH } from '../../../../constants/global'
import { down } from '../../../../assets/style/breakpointHelpers'

export const HeaderContainer = styled('div')({
  width: '90%',
  maxWidth: MAXWIDTH,
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  margin: '0 auto'
})

export const TextContainer = styled('div')({
  width: '100%',
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  padding: '56px 0 0',
  textAlign: 'left',
  [down('md')]: {
    padding: '36px 0 0'
  },
  [down('sm')]: {
    padding: '20px 0 0'
  }
})

export const Text = styled(Typography)({
  fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
  fontSize: 30,
  lineHeight: '42px',
  margin: 0,
  color: COLOR,
  [down('md')]: {
    fontSize: 24,
    lineHeight: '35px'
  },
  [down('sm')]: {
    fontSize: 18,
    lineHeight: '30px'
  }
})

export const StatsContainer = styled('div')({
  width: '100%',
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  padding: '25px 0 0',
  textAlign: 'left',
  display: 'flex',
  alignItems: 'center'
})

export const StatsItem = styled(Typography)(
  ({ isml, ismr }: { isml?: 'true' | 'false'; ismr?: 'true' | 'false' }) => ({
    fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    fontSize: 12,
    lineHeight: '20px',
    margin: 0,
    marginRight: ismr === 'true' ? 25 : 0,
    marginLeft: isml === 'true' ? 25 : 0,
    [down('md')]: {
      fontSize: 10,
      lineHeight: '15px'
    }
  })
)
