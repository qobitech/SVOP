import { styled, Typography } from '@material-ui/core'
import { COLOR } from '../../../constants/global'

export const VoteSuccessContainer = styled('div')({
  width: '100%',
  background: '#fff'
})

export const CategorySection = styled('div')({
  width: '100%',
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  margin: '0 auto'
})

export const ContentText = styled(Typography)({
  fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
  fontSize: 13,
  lineHeight: '24px',
  textAlign: 'center'
})

export const SuccessImage = styled('img')({
  maxWidth: 180,
  maxHeight: 180,
  width: '100%',
  height: '100%',
  margin: '0 auto'
})

export const ContentContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 500,
  width: '90%',
  margin: '0 auto',
  marginTop: 50
})

export const LinkTxt = styled('a')({
  fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
  fontSize: 13,
  lineHeight: '24px',
  color: COLOR,
  '&:hover': {
    color: COLOR
  }
})
