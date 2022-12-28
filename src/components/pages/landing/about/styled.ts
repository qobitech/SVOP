import { styled, Typography } from '@material-ui/core'
import { MAXWIDTH } from '../../../../constants/global'
import { down } from '../../../../assets/style/breakpointHelpers'

export const AboutContainer = styled('div')({
  width: '90%',
  maxWidth: MAXWIDTH,
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  margin: '0 auto'
})

export const AboutBodyContainer = styled('div')({
  width: '100%',
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  padding: '20px 0 45px',
  textAlign: 'left',
  [down('md')]: {
    padding: '36px 0 0'
  },
  [down('sm')]: {
    padding: '20px 0 0'
  }
})

export const AboutHeader = styled(Typography)(
  ({ isml, ismr }: { isml?: 'true' | 'false'; ismr?: 'true' | 'false' }) => ({
    fontFamily: ['Outfit_Bold', 'Arial', 'sans-serif'].join(','),
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

export const AboutBody = styled(Typography)(
  ({ isml, ismr }: { isml?: 'true' | 'false'; ismr?: 'true' | 'false' }) => ({
    fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    lineHeight: '25px',
    margin: 0,
    marginRight: ismr === 'true' ? 25 : 0,
    marginLeft: isml === 'true' ? 25 : 0,
    [down('md')]: {
      fontSize: 10,
      lineHeight: '15px'
    }
  })
)
