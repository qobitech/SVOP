import { styled, Typography } from '@material-ui/core';


export const HeaderContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20
})

export const BodyContainer = styled('div')({
    width: '100%',
    height: '50vh',
    borderRadius: 5,
    background: '#fff'
})

export const HeaderText = styled(Typography)({
    fontFamily: ['IBX_Bold', 'Arial', 'sans-serif'].join(','),
    textTransform: 'capitalize',
    fontSize: 16,
    fontWeight: 600,
    margin: 0,
    marginRight: 5,
    color: '#286439'
})

export const HeaderTextNumbers = styled(Typography)({
    fontFamily: ['Outfit_Medium', 'Arial', 'sans-serif'].join(','),
    textTransform: 'capitalize',
    fontSize: 10,
    margin: 0,
    color: '#286439',
    width: 'max-content',
    height: 17.15,
    background: '#D2E9D9',
    borderRadius: 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 8px'
})