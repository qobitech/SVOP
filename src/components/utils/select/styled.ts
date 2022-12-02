import { styled } from '@material-ui/core'

export const FormControlContainer = styled('div')(
  ({ nomargin }: { nomargin?: 'true' | 'false' }) => ({
    marginBottom: nomargin === 'true' ? 0 : 15,
    display: 'flex',
    flexDirection: 'column',
    padding: '5px 0'
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

export const SelectInput = styled('select')(
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
    // marginBottom: 7,
    height: customheight || 40,
    paddingLeft: 10,
    minWidth: customwidth || 280,
    border: `1px solid ${iserror ? 'red' : '#e6e6e6'}`,
    '&:focus': {
      border: `1px solid ${iserror ? 'red' : '#286439'}`
    }
  })
)
