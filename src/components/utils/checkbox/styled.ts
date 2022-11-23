import { styled } from '@material-ui/core'

export const FormControlContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: 0
})

export const InputError = styled('p')({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 11,
  color: 'red',
  margin: 0
})

export const TextCheckbox = styled('input')({
  outline: '#286439',
  borderRadius: 3,
  height: 14,
  width: 14
})
