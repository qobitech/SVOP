import { styled, Typography } from '@material-ui/core'

export const ToggleTextContainer = styled('div')({
  width: 'max-content'
})

export const ToggleText = styled(Typography)(
  ({ isactive }: { isactive: 'true' | 'false' }) => ({
    fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
    fontSize: 14,
    margin: 0,
    color: isactive === 'true' ? '#286439' : '#b9b9b9',
    transition: '.2s ease-in'
  })
)
