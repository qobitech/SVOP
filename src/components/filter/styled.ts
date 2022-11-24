import { styled, Typography } from '@material-ui/core'
import { down } from '../../assets/style/breakpointHelpers'

export const FilterContainer = styled('div')({
  border: 'none',
  borderRadius: 5,
  width: '100%',
  boxSizing: 'border-box',
  padding: 0,
  marginBottom: 20
})

export const FilterContentContainer = styled('div')({
  border: '1px solid #DAEFE0',
  borderRadius: 5,
  width: '100%',
  boxSizing: 'border-box',
  padding: 15,
  margin: '20px 0'
})

export const FilterButtonSection = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  [down('sm')]: {
    flexDirection: 'column-reverse',
    alignItems: 'flex-start'
  }
})

export const FilterButtonLeftSection = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  [down('sm')]: {
    marginTop: 10
  }
})

export const FilterButtonIcon = styled('img')({
  width: 15,
  height: 15
})

export const SortText = styled(Typography)(({ isselected }: { isselected: 'true' | 'false' }) => ({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 16,
  color: isselected === 'true' ? '#286439' : '#b4b4b4'
}))

export const SortIconTag = styled('i')(({
  color,
  isselected,
  background
}:
{
  color?: string
  isselected?: 'true' | 'false'
  background?: string
}) => ({
  color: isselected === 'true' ? color : '',
  background: isselected === 'true' ? background : '',
  transition: '.2s ease-in-out',
  cursor: 'pointer',
  fontSize: 10,
  border: '1px solid ' + background,
  '&:hover': {
    background,
    color
  }
}))

export const FilterButton = styled('button')(({ isclicked }: { isclicked?: string }) => ({
  width: 86,
  height: 43,
  fontSize: 12,
  fontFamily: [isclicked === 'true' ? 'Outfit_Medium' : 'Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  marginRight: 20,
  border: `1px solid ${isclicked === 'true' ? '#286439' : '#DAEFE0'}`,
  borderRadius: 5,
  color: isclicked === 'true' ? '#286439' : '#000',
  cursor: 'pointer',
  '&:hover': {
    fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
    color: '#286439',
    border: '1px solid \'#286439\''
  }
}))
