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

export const MainContainer = styled('div')({
  width: '100%',
  height: '100vh',
  background: '#F9F9F9'
})

export const ChildrenContainer = styled('div')({
  zIndex: 2,
  position: 'relative',
  padding: 15,
  height: '100vh'
})
