import { styled } from '@material-ui/core'

export const FormControlContainer = styled('div')(
  ({ nomargin }: { nomargin?: 'true' | 'false' }) => ({
    marginBottom: nomargin === 'true' ? 0 : 15,
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 0',
    position: 'relative'
  })
)

export const InputLabelComponent = styled('label')({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 12,
  color: '#286439',
  marginBottom: 10
})

export const InputError = styled('p')({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 11,
  color: 'red',
  margin: 0
})

export const AutoSelect = styled('input')(
  ({
    iserror,
    customwidth,
    customheight
  }: {
    iserror?: string
    customwidth?: number
    customheight?: number
  }) => ({
    fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
    outline: '#286439',
    borderRadius: 3,
    background: 'none',
    height: customheight || 40,
    paddingLeft: 10,
    minWidth: customwidth || 280,
    border: `1px solid ${iserror ? 'red' : '#e6e6e6'}`,
    '&:focus': {
      border: `1px solid ${iserror ? 'red' : '#286439'}`
    }
  })
)

export const AutoSelectContainer = styled('div')(
  ({ customwidth }: { customwidth?: number }) => ({
    minWidth: customwidth || 280,
    maxWidth: 500,
    border: `1px solid #e6e6e6`,
    borderRadius: 3,
    height: 200,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    top: 60,
    zIndex: 2,
    background: '#fff'
  })
)

export const AutoSelectOptionContainer = styled('div')(
  ({ customheight }: { customheight?: number }) => ({
    width: '100%',
    height: customheight || 170,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
  })
)

export const AutoSelectOptionItemContainer = styled('div')({
  width: '100%',
  height: 'auto',
  minHeight: 30,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  padding: '5px 10px',
  '&:hover': {
    background: '#D2E9D9',
    color: '#286439'
  }
})

export const AutoSelectOptionNoItemContainer = styled('div')({
  width: '100%',
  height: 30,
  minHeight: 30,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  padding: '0 10px',
  opacity: '.5'
})

export const AutoSelectOptionItem = styled('p')({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 13,
  margin: '5px 0',
  whiteSpace: 'nowrap',
  '&:hover': {
    color: '#286439'
  }
})

export const AutoSelectNoOptionItem = styled('p')({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 13,
  margin: 0
})

export const AutoSelectPaginationContainer = styled('div')({
  width: '100%',
  borderTop: `1px solid #e6e6e6`,
  height: 35,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 'auto'
})

export const AutoSelectPagination = styled('p')({
  margin: 0,
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 13
})

export const AutoSelectPaginationNav = styled('p')({
  margin: 0,
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 12,
  cursor: 'pointer',
  transition: '.1s ease-in-out',
  padding: 10,
  '&:hover': {
    background: '#286439',
    color: '#fff'
  }
})
