import { styled } from '@material-ui/core'

export const FormControlContainer = styled('div')({
  marginBottom: 10,
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 0'
})

export const Button = styled('button')(
  ({ btntype }: { btntype?: 'bold' | 'outlined' | undefined }) => ({
    height: 45,
    background: !btntype || btntype === 'bold' ? '#A966FF' : '#fff',
    color: !btntype || btntype === 'bold' ? '#fff' : '#286439',
    border: !btntype || btntype === 'bold' ? 'none' : '1px solid #286439',
    fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    cursor: 'pointer',
    borderRadius: 3,
    padding: '0 20px',
    transition: '.2s ease-in-out',
    '&:hover': {
      background: '#7000FF'
    }
  })
)
