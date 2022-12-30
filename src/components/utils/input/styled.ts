import { styled } from '@material-ui/core'

export const FormControlContainer = styled('div')({
  marginBottom: 15,
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 0'
})

export const InputLabelComponent = styled('label')({
  fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  color: '#000',
  marginBottom: 15
})

export const InputError = styled('p')({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 11,
  color: 'red',
  margin: 0
})

export const TextInput = styled('input')(
  ({
    iserror,
    nomargin
  }: {
    iserror?: string
    nomargin?: 'true' | 'false'
  }) => ({
    fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    fontSize: 16,
    outline: '#286439',
    borderRadius: 3,
    marginBottom: nomargin === 'true' ? 0 : 7,
    height: 40,
    paddingLeft: 10,
    background: 'none',
    border: `1px solid ${iserror ? 'red' : '#e6e6e6'}`,
    '&:focus': {
      border: `1px solid ${iserror ? 'red' : '#286439'}`
    }
  })
)
