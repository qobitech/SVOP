import { styled, Typography } from '@material-ui/core'
import { down } from '../../../assets/style/breakpointHelpers'
import { MAXWIDTH } from '../../../constants/global'

export const GetStartedContainer = styled('div')({
  width: '100%',
  background: '#fff'
})

export const InputLabelComponent = styled('label')({
  fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  color: '#000',
  position: 'relative',
  top: 0
})

export const FormContainer = styled('div')({
  width: '90%',
  maxWidth: MAXWIDTH,
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  margin: '0 auto'
})

export const CategorySection = styled('div')({
  width: '100%',
  background: '#fff',
  height: 'max-content',
  boxSizing: 'border-box',
  margin: '0 auto'
})

export const CategoryHeader = styled(Typography)({
  fontFamily: ['Outfit_SemiBold', 'Arial', 'sans-serif'].join(','),
  fontSize: 11,
  lineHeight: '24px',
  textTransform: 'uppercase'
})

export const CategoryBody = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  borderRadius: 3,
  cursor: 'pointer',
  transition: '.2s ease-in-out',
  padding: '0 5px'
})

export const CategoryBodyText = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 13,
  lineHeight: '20px',
  margin: 0
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

export const FormGroup = styled('div')({
  maxWidth: 500,
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [down('md')]: {
    flexDirection: 'column',
    alignItems: 'unset'
  }
})

export const StatusErrorText = styled('p')({
  color: 'red',
  fontSize: 14,
  margin: 0
})

export const LoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 500,
  width: '90%',
  margin: '0 auto',
  marginTop: 50
})
