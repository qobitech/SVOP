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
  background: '#fff',
  top: 0,
  left: 0
})

export const MainContainer = styled('div')({
  width: '100%',
  // height: '100vh',
  background: '#fff',
  // overflow: 'auto',
  display: 'flex',
  flexDirection: 'column'
})

export const ChildrenContainer = styled('div')({
  zIndex: 2,
  // position: 'relative',
  padding: 0,
  height: '100vh',
  margin: '0 auto',
  boxSizing: 'border-box',
  paddingTop: 70,
  maxWidth: 1440,
  width: '100%'
  // marginBottom: 400
})
