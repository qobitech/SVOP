import { styled } from '@material-ui/core'
import { down } from '../../../../assets/style/breakpointHelpers'

export const PageContainer = styled('div')({
  display: 'flex',
  height: '100vh'
})

export const ImgSectionContainer = styled('div')({
  display: 'block',
  width: '50%',
  height: '100%',
  [down('md')]: {
    display: 'none'
  }
})

export const SectionContainer = styled('div')({
  width: '50%',
  height: '100%',
  [down('md')]: {
    width: '100%'
  }
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
  maxWidth: 215,
  width: '80%',
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
  maxWidth: '90%',
  width: 350,
  margin: '0 auto',
  marginTop: 170,
  [down('md')]: {
    marginTop: 150
  }
})
