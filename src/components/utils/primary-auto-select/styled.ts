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

export const AutoSelectRow = styled('div')({
  display: 'flex',
  width: 'max-content',
  height: 'max-content'
})

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
    caretColor: 'transparent'
  })
)

export const AutoSelectCloseContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 30,
  height: 50,
  boxSizing: 'border-box'
})

export const AutoSelectCloseIcon = styled('i')(
  ({ isvalue }: { isvalue: 'true' | 'false' }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: isvalue === 'true' ? 'pointer' : 'default',
    opacity: isvalue === 'true' ? 1 : 0
  })
)

export const AutoSelectSearchContainer = styled('div')({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  width: '100%',
  height: 50
})

export const AutoSelectSearchInout = styled('input')({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 16,
  outline: '#286439',
  borderRadius: 3,
  background: 'none',
  height: 40,
  paddingLeft: 10,
  width: '100%',
  border: `1px solid #e6e6e6`,
  '&:focus': {
    border: `1px solid #286439`
  }
})

export const AutoSelectContainer = styled('div')(
  ({ customwidth }: { customwidth?: number }) => ({
    minWidth: customwidth || 280,
    maxWidth: 500,
    border: `1px solid #e6e6e6`,
    borderRadius: 3,
    height: 300,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    top: 60,
    zIndex: 2,
    background: '#fff',
    padding: 10
  })
)

export const AutoSelectOptionContainer = styled('div')(
  ({ customheight }: { customheight?: number }) => ({
    width: '100%',
    height: customheight || 250,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto'
  })
)

export const AutoSelectPaginationContainer = styled('div')({
  width: '100%',
  // borderTop: `1px solid #e6e6e6`,
  height: 45,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 'auto'
})

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
