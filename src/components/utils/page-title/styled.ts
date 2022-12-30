import { styled } from '@material-ui/core'
import { COLOR } from '../../../constants/global'

export const PageTitleContainer = styled('div')({
  width: '100%',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const PageTitleLine = styled('div')({
  flex: 1,
  height: 1,
  background: COLOR,
  opacity: 0.5
})

export const PageTitleText = styled('div')({
  fontFamily: ['Outfit_Bold', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 11,
  margin: 0,
  color: COLOR,
  letterSpacing: 4
})
