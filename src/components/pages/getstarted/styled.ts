import { styled, Typography } from '@material-ui/core'
import { MAXWIDTH } from '../../../constants/global'

export const GetStartedContainer = styled('div')({
  width: '100%',
  background: '#fff'
})

export const FormContainer = styled('div')({
  width: '90%',
  maxWidth: MAXWIDTH,
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  margin: '0 auto'
})

export const FormTitle = styled(Typography)({
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 13,
  lineHeight: '24px'
})

export const ImageSection = styled('div')(({ imgsrc }: { imgsrc: string }) => ({
  width: '100%',
  backgroundImage: `url(${imgsrc})`,
  background: '#e7e7e7',
  height: '100%',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}))

export const LogoSection = styled('img')({
  // maxWidth: 215,
  width: '100%',
  margin: '0 auto',
  marginTop: 40
})

export const StatusSection = styled('div')({
  textAlign: 'center',
  height: 20,
  marginBottom: 10
})

export const StatusErrorText = styled('p')({
  color: 'red',
  fontSize: 14,
  margin: 0
})

export const LoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
  maxWidth: 500,
  margin: '0 auto',
  marginTop: 50
})
