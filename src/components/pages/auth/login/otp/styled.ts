import { styled } from '@material-ui/core'
// import { down } from '../../assets/style/breakpointHelpers'

export const OTPForm = styled('form')({
  display: 'flex',
  flexDirection: 'column'
})

export const CTAApproveButton = styled('button')({
  width: 'max-content',
  height: 43,
  fontSize: 14,
  padding: '0 15px',
  fontFamily: ['IBX_Medium', 'Arial', 'sans-serif'].join(','),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#369B53',
  margin: 0,
  marginRight: 20,
  border: '1px solid #369B53',
  borderRadius: 5,
  color: '#fff',
  cursor: 'pointer'
})

export const CTARejectButton = styled('button')({
  width: 'max-content',
  height: 43,
  fontSize: 14,
  padding: '0 15px',
  fontFamily: ['IBX_Medium', 'Arial', 'sans-serif'].join(','),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  margin: 0,
  border: '1px solid #F2525A',
  borderRadius: 5,
  color: '#F2525A',
  cursor: 'pointer'
})

export const CTABtnSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  marginTop: 0
  // [down('md')]: {
  //   marginTop: 30,
  //   marginLeft: 0
  // }
})
