import { styled } from '@material-ui/core';

export const PageContainer = styled('div')({
    display: 'flex'
})

export const SectionContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    height: '100vh'
})

export const ImageSection = styled('div')(({imgSrc}: {imgSrc: string})=>({
    width: '100%',
    backgroundImage: `url(${imgSrc})`,
    background: '#e7e7e7',
    height: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}))

export const LogoSection = styled('img')({
    marginTop: 10
})
