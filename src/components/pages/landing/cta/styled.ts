import { styled } from '@material-ui/core'
import {
  COLOR_SECONDARY,
  COLOR_SECONDARY_HOVER,
  MAXWIDTH
} from '../../../../constants/global'

export const CTAContainer = styled('div')({
  width: '90%',
  maxWidth: MAXWIDTH,
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  margin: '0 auto'
})

export const CTAButtonContainer = styled('div')({
  width: '100%',
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const CTAButton = styled('a')(
  ({ isml, ismr }: { isml?: 'true' | 'false'; ismr?: 'true' | 'false' }) => ({
    fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
    width: 'max-content',
    height: 'max-content',
    padding: '12px 20px',
    borderRadius: '3px',
    background: COLOR_SECONDARY,
    color: '#fff !important',
    fontSize: 14,
    cursor: 'pointer',
    margin: 0,
    marginRight: ismr === 'true' ? 25 : 0,
    marginLeft: isml === 'true' ? 25 : 0,
    transition: '.2s ease-in-out',
    textDecoration: 'none',
    '&:hover': {
      background: COLOR_SECONDARY_HOVER,
      textDecoration: 'none'
    }
  })
)
