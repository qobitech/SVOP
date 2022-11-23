import { styled } from '@material-ui/core'

import { Link } from 'react-router-dom'

export const LinkContainer = styled(Link)(({ nounderline, color }: { nounderline?: 'true' | 'false', color?: string }) => ({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  textDecoration: nounderline === 'true' ? 'none' : 'underlined',
  display: 'flex',
  cursor: 'pointer',
  '&:hover': {
    color: color || '#286439',
    textDecoration: nounderline === 'true' ? 'none' : 'underlined'
  }
}))

export const TableContainer = styled('div')({
  overflow: 'auto'
})

export const TableCheckBoxColumn = styled('td')({
  padding: '10px 0px 10px 15px'
})

export const TableCellImageComponent = styled('img')(({ nomargin }: { nomargin?: 'true' | 'false' }) => ({
  marginRight: nomargin === 'true' ? 0 : 35,
  cursor: 'pointer'
}))

export const TableCellActionSection = styled('div')({
  display: 'flex'
  // flexWrap: 'nowrap',
  // whiteSpace: 'nowrap'
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
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
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

export const TableButton = styled('button')(({ background, color, nomargin }: { background?: string, color?: string, nomargin?: 'true' | 'false' }) => ({
  height: 'auto',
  background,
  color,
  border: 'none',
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 16,
  cursor: 'pointer',
  borderRadius: 3,
  padding: '5px 10px',
  marginRight: nomargin === 'true' ? 0 : 20,
  display: 'flex',
  width: 'max-content',
  textDecoration: 'none'
}))
