import { styled, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { down } from '../../../assets/style/breakpointHelpers'

export const LinkContainer = styled(Link)({
  fontFamily: 'inherit',
  fontSize: 'inherit',
  color: 'inherit',
  display: 'flex'
})

export const HeaderContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginBottom: 20
})

export const BodyContainer = styled('div')({
  width: '100%',
  maxWidth: '100%',
  height: 'auto',
  borderRadius: 5,
  background: '#fff',
  padding: 20,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  alignItems: 'stretch',
  justifyContent: 'space-between',
  [down('md')]: {
    flexDirection: 'column-reverse'
  }
})

export const HeaderText = styled(Typography)({
  fontFamily: ['IBX_Bold', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 16,
  fontWeight: 600,
  margin: 0,
  marginRight: 5,
  color: '#286439',
  display: 'flex',
  flexWrap: 'wrap'
})

export const BodySection = styled('div')(({ width }: { width: string }) => ({
  width,
  height: 'auto',
  margin: 0,
  textAlign: 'center',
  [down('md')]: {
    width: '100%',
    margin: '20px 0'
  }
}))

export const BodySectionComponent = styled('div')({
  width: '100%',
  height: 'auto',
  border: '1px solid #DAEFE0',
  borderRadius: 5,
  marginBottom: 35,
  boxSizing: 'border-box',
  padding: 30
})

export const BodySectionDoubleComponent = styled('div')({
  width: '100%',
  height: 'auto',
  border: '1px solid #DAEFE0',
  borderRadius: 5,
  marginBottom: 35,
  boxSizing: 'border-box',
  padding: 30,
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap'
})

export const BodySectionDouble = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: '45%',
  boxSizing: 'border-box',
  [down('md')]: {
    width: '100%'
  }
})

export const BodySectionRow = styled('div')({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0',
  boxSizing: 'border-box',
  borderBottom: '1px solid #e8e8e8'
})

export const BodySectionLeft = styled('p')({
  fontFamily: ['IBX_Light', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  margin: 0,
  color: '#286439'
})

export const BodySectionRight = styled('p')({
  fontFamily: ['IBX_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  margin: 0,
  textTransform: 'uppercase'
})

export const BodySectionComponentImage = styled('div')({
  width: '100%',
  height: '90%',
  border: '1px solid #DAEFE0',
  borderRadius: 5,
  marginTop: 20
})

export const BodySectionProfile = styled('div')({
  width: '100%',
  height: 'max-content',
  borderRadius: 5,
  marginBottom: 20,
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  [down('sm')]: {
    alignItems: 'flex-start'
  }
})

export const BodyProfileNameRoleSection = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
})

export const ProfileImage = styled('img')({
  borderRadius: '50%',
  width: 40,
  height: 40,
  marginRight: 10
})

export const BodySectionHeader = styled('h5')({
  fontSize: 12,
  color: '#286439',
  fontFamily: ['IBX_Light', 'Arial', 'sans-serif'].join(','),
  margin: '0px 0 10px'
})

export const BodySectionProfileName = styled('p')({
  fontSize: 16,
  color: '#286439',
  fontFamily: ['IBX_Regular', 'Arial', 'sans-serif'].join(','),
  margin: 0,
  marginBottom: 3

})

export const BodySectionProfileRole = styled('p')({
  fontSize: 12,
  color: '#5C5C5C',
  fontFamily: ['IBX_Light', 'Arial', 'sans-serif'].join(','),
  margin: 0,
  [down('sm')]: {
    color: '#000'
  }
})

export const MobileBodySectionProfileDate = styled('p')({
  display: 'none',
  fontSize: 10,
  color: '#5C5C5C',
  fontFamily: ['IBX_Light', 'Arial', 'sans-serif'].join(','),
  margin: 0,
  [down('sm')]: {
    display: 'block',
    marginTop: 7
  }
})

export const BodySectionProfileDate = styled('p')({
  fontSize: 13,
  color: '#5C5C5C',
  fontFamily: ['IBX_Light', 'Arial', 'sans-serif'].join(','),
  margin: 0,
  marginLeft: 'auto',
  [down('sm')]: {
    display: 'none'
  }
})

export const VoteCountSection = styled('div')({
  width: 'max-content',
  display: 'flex',
  margin: '15px 20px 15px 0'
})

export const VoteCountGridSection = styled('div')({
  borderRadius: 5,
  display: 'grid',
  gridRow: 'auto',
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
  justifyContent: 'space-between'
})

export const CTAVoteSection = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  boxSizing: 'border-box',
  alignItems: 'flex-end'
})

export const TotalResultTitleText = styled('p')({
  fontFamily: ['IBX_Light', 'Arial', 'sans-serif'].join(','),
  fontSize: 20,
  color: '#5C5C5C',
  margin: 0
})

export const TotalResultValueText = styled('p')({
  fontFamily: ['IBX_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 20,
  color: '#286439',
  margin: 0
})

export const TotalResultValueTextMini = styled('p')({
  fontFamily: ['IBX_Medium', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  color: '#286439',
  margin: 0,
  marginBottom: 3,
  marginLeft: 4
})

export const CTABtnSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  marginLeft: 'auto'
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
