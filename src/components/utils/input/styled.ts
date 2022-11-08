import { styled } from '@material-ui/core'

export const FormControlContainer = styled('div')({
  marginBottom: 15,
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 0'
})

export const InputLabelComponent = styled('label')({
  fontFamily: ['IBX_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 12,
  color: '#286439',
  marginBottom: 10
})

export const InputError = styled('p')({
  fontFamily: ['IBX_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 11,
  color: 'red',
  margin: 0
})

export const TextInput = styled('input')(({ iserror }: { iserror?: string }) => ({
  fontFamily: ['IBX_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 16,
  outline: '#286439',
  borderRadius: 3,
  marginBottom: 7,
  height: 40,
  paddingLeft: 10,
  border: `1px solid ${iserror ? 'red' : '#e6e6e6'}`,
  '&:focus': {
    border: `1px solid ${iserror ? 'red' : '#286439'}`
  }
}))
