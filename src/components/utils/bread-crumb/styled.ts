import { styled, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  display: 'flex',
  textDecoration: 'underline',
  '&:hover': {
    color: 'inherit'
  }
})

export const HeaderImage = styled('img')({
  width: 17,
  height: 17,
  marginTop: 2
})

export const HeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20
})

export const HeaderText = styled(Typography)({
  fontFamily: ['IBX_Light', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 14,
  fontWeight: 600,
  margin: 0,
  marginRight: 5,
  color: '#286439',
  display: 'flex',
  flexWrap: 'wrap'
})
