import { styled, Typography } from '@material-ui/core'

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
  boxSizing: 'border-box'
})

export const AccordionSection = styled('div')({
  width: '100%',
  borderRadius: 5,
  border: '1px solid #DAEFE0',
  boxSizing: 'border-box'
})

export const AccordionRow = styled('div')(({ noborder }: { noborder?: 'true' | 'false' }) => ({
  width: '100%',
  borderBottom: noborder === 'true' ? 'none' : '1px solid #DAEFE0',
  boxSizing: 'border-box',
  padding: '3px 20px',
  display: 'flex',
  flexDirection: 'column'
}))

export const AccordionRowHeader = styled('div')({
  width: '100%',
  boxSizing: 'border-box',
  height: 'auto',
  padding: '10px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  cursor: 'pointer'
})

export const AccordionRowBody = styled('div')({
  width: '100%',
  boxSizing: 'border-box',
  height: 'auto',
  padding: '10px 50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
})

export const AccordionHeaderTextNumber = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 14,
  margin: 0,
  color: '#286439',
  width: 30
})

export const AccordionHeaderText = styled(Typography)({
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 16,
  margin: 0,
  color: '#286439'
})

export const AccordionHeaderTextLeft = styled('div')({
  display: 'flex',
  alignItems: 'center'
})

export const AccordionBodyText = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  fontSize: 14,
  margin: 0
})

export const AccordionHeaderIcon = styled('i')({
  fontSize: 12,
  margin: 0,
  color: '#286439',
  padding: 5,
  borderRadius: 3,
  transition: '.2s ease-in-out',
  '&:hover': {
    background: '#DAEFE0'
  }
})

export const HeaderText = styled(Typography)({
  fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 16,
  fontWeight: 600,
  margin: 0,
  marginRight: 5,
  color: '#286439'
})

export const HeaderBodyText = styled(Typography)({
  fontFamily: ['Outfit_Regular', 'Arial', 'sans-serif'].join(','),
  textTransform: 'capitalize',
  fontSize: 25,
  fontWeight: 600,
  margin: 0,
  marginRight: 25,
  color: '#286439'
})
