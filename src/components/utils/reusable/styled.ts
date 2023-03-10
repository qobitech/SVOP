import { styled, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  display: 'flex'
  //    textDecoration: 'none'
})

export const HeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20
})

export const BodyContainer = styled('div')({
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 5,
  background: '#fff',
  padding: 20,
  boxSizing: 'border-box',
  paddingBottom: 140
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
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 10,
  margin: 0,
  color: '#286439',
  width: 'max-content',
  height: 17.15,
  background: '#D2E9D9',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 8px'
})
