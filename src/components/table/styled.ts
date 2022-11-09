import { styled } from '@material-ui/core'

import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  textDecoration: 'none',
  display: 'flex'
})

export const TableContainer = styled('div')({
  overflow: 'auto'
})

export const PaginationContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})

export const FilterButton = styled('button')({
  width: 'max-content',
  height: 43,
  fontSize: 16,
  padding: '0 15px',
  fontFamily: ['IBX_Regular', 'Arial', 'sans-serif'].join(','),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  marginRight: 20,
  border: '1px solid #DAEFE0',
  borderRadius: 5,
  color: '#000',
  cursor: 'pointer'
})
