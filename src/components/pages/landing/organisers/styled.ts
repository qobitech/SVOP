import { styled, Typography } from '@material-ui/core'
import { COLOR, MAXWIDTH } from '../../../../constants/global'
import { down } from '../../../../assets/style/breakpointHelpers'

export const OrganisersContainer = styled('div')({
  width: '90%',
  maxWidth: MAXWIDTH,
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  margin: '0 auto'
})

export const OrganisersBodyContainer = styled('div')({
  width: '100%',
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  textAlign: 'left',
  '& p': {
    fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    lineHeight: '25px',
    margin: 0,
    [down('md')]: {
      fontSize: 13,
      lineHeight: '19px'
    }
  },
  '& ul': {
    paddingLeft: 15
  },
  '& li': {
    fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    lineHeight: '25px',
    paddingLeft: 7,
    margin: 0,
    [down('md')]: {
      fontSize: 13,
      lineHeight: '19px'
    }
  },
  '& span a': {
    fontFamily:
      ['Outfit_Medium', 'Arial', 'sans-serif'].join(',') + ' !important',
    fontSize: 14,
    lineHeight: '25px',
    color: COLOR + ' !important',
    margin: 0,
    [down('md')]: {
      fontSize: 13,
      lineHeight: '19px'
    }
  },
  '& span a:hover': {
    textDecoration: 'underline !important'
  }
})

export const OrganisersHeader = styled(Typography)(
  ({ isml, ismr }: { isml?: 'true' | 'false'; ismr?: 'true' | 'false' }) => ({
    fontFamily: ['Outfit_Bold', 'Arial', 'sans-serif'].join(','),
    fontSize: 12,
    lineHeight: '20px',
    textTransform: 'uppercase',
    margin: 0,
    marginRight: ismr === 'true' ? 25 : 0,
    marginLeft: isml === 'true' ? 25 : 0,
    [down('md')]: {
      fontSize: 10,
      lineHeight: '15px'
    }
  })
)
