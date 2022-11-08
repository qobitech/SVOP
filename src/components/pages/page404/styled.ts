import { styled } from '@material-ui/core'

export const PageContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  alignItems: 'center',
  paddingTop: 20
})

export const ImgContainer = styled('img')({
  maxWidth: 400,
  width: '100%',
  marginBottom: 20
})

export const TxtContainer = styled('p')({
  fontFamily: ['IBX_Bold', 'Arial', 'sans-serif'].join(','),
  fontSize: 18,
  margin: 0,
  marginBottom: 10
})
