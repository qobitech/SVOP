import { styled } from '@material-ui/core'
import { MAXWIDTH } from '../../../constants/global'

export const SponsorshipContainer = styled('div')({
  width: '100%',
  background: '#fff'
})

export const FormContainer = styled('div')({
  width: '90%',
  maxWidth: MAXWIDTH,
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  margin: '0 auto'
})
