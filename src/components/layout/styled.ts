import { styled } from '@material-ui/core'

export const OverLay = styled('div')({
  position: 'fixed',
  width: '100%',
  height: '100%',
  background: '#000',
  opacity: 0.3,
  top: 0,
  left: 0,
  zIndex: 4
})

export const HeaderBackgroundOverLay = styled('div')({
  position: 'fixed',
  width: '100%',
  height: 345,
  background: '#E5F9EB',
  top: 0,
  left: 0
})

export const MainContainer = styled('div')(({ bgimg }: { bgimg: string }) => ({
  width: '100%',
  height: '100vh',
  background: '#F9F9F9',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column'
  // backgroundImage: 'url(' + bgimg + ')',
  // backgroundRepeat: 'no-repeat',
  // backgroundPosition: 'top',
}))

export const ChildrenContainer = styled('div')({
  zIndex: 2,
  position: 'relative',
  padding: 15,
  height: '100vh',
  margin: '0 auto',
  boxSizing: 'border-box',
  paddingTop: 70,
  maxWidth: 1440,
  width: '100%'
  // marginBottom: 400
})
