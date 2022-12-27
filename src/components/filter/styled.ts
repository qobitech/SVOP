import { styled, Typography } from '@material-ui/core'
import { down } from '../../assets/style/breakpointHelpers'

export const FilterContainer = styled('div')({
  border: 'none',
  borderRadius: 5,
  width: '100%',
  boxSizing: 'border-box',
  padding: 0,
  marginBottom: 10
})

export const FilterContentContainer = styled('div')({
  border: '1px solid #DAEFE0',
  borderRadius: 5,
  width: '100%',
  boxSizing: 'border-box',
  padding: 15,
  margin: '20px 0'
})

export const FilterItemContainer = styled('div')(
  ({ hide }: { hide: 'true' | 'false' }) => ({
    boxSizing: 'border-box',
    cursor: 'pointer',
    transition: '.1s ease',
    display: hide === 'true' ? 'none' : 'flex',
    '&:hover': {
      background: '#D2E9D9',
      color: 'rgb(40, 100, 57)'
    }
  })
)

export const FilterButtonSection = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
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

export const SortText = styled(Typography)(
  ({ isselected }: { isselected: 'true' | 'false' }) => ({
    fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
    color: isselected === 'true' ? '#286439' : '#b4b4b4'
  })
)

export const SortIconTag = styled('i')(
  ({
    color,
    isselected,
    background
  }: {
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
  })
)

export const FilterButton = styled('button')(
  ({
    isclicked,
    nomargin
  }: {
    isclicked?: string
    nomargin?: 'true' | 'false'
  }) => ({
    minWidth: 86,
    width: 'max-content',
    padding: '0 20px',
    height: 43,
    fontSize: 12,
    fontFamily: [
      isclicked === 'true' ? 'Outfit_Medium' : 'Outfit_Regular',
      'Arial',
      'sans-serif'
    ].join(','),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    marginRight: nomargin === 'true' ? 0 : 20,
    border: `1px solid ${isclicked === 'true' ? '#286439' : '#DAEFE0'}`,
    borderRadius: 5,
    color: isclicked === 'true' ? '#286439' : '#000',
    cursor: 'pointer',
    '&:hover': {
      fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
      color: '#286439',
      border: "1px solid '#286439'"
    }
  })
)

export const FilterSubButton = styled('button')(
  ({
    isclicked,
    nomargin
  }: {
    isclicked?: string
    nomargin?: 'true' | 'false'
  }) => ({
    minWidth: 60,
    width: 'max-content',
    padding: '0 15px',
    height: 35,
    fontSize: 11,
    fontFamily: [
      isclicked === 'true' ? 'Outfit_Medium' : 'Outfit_Regular',
      'Arial',
      'sans-serif'
    ].join(','),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    marginRight: nomargin === 'true' ? 0 : 15,
    border: `1px solid ${isclicked === 'true' ? '#286439' : '#DAEFE0'}`,
    borderRadius: 5,
    color: isclicked === 'true' ? '#286439' : '#000',
    cursor: 'pointer',
    '&:hover': {
      fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
      color: '#286439',
      border: "1px solid '#286439'"
    }
  })
)
